import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import axios from "axios";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const loginHandle = () => {
    axios
      .post("https://api.charity-steps.ru/api/auth/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("name", "зачем я тебя создал?");
        if (typeof window !== "undefined") {
          window.location.href = "/main";
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <div className="flex flex-col gap-6 px-4 h-full">
      <h1 className="pt-[56px] text-[32px] font-sf-pro-bold leading-[38px]">
        Войти
      </h1>
      <p className="text-[20px] text-neutral-500">
        Введите электронную почту и пароль, чтобы войти в приложение
      </p>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label className="text-[14px] text-neutral-400" htmlFor="email">
          Почта
        </Label>
        <Input
          className="placeholder:text-[17px] placeholder:text-neutral-400"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="ivanov@mail.ru"
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label className="text-[14px] text-neutral-400" htmlFor="password">
          Пароль
        </Label>
        <Input
          className="text-[14px] font-sans"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
        />
      </div>
      <p className="text-[16px] underline cursor-pointer text-neutral-400">
        Забыли пароль?
      </p>
      <Button size="lg" onClick={loginHandle}>
        Войти
      </Button>

      <span className="mt-auto mb-4 text-neutral-400 text-[14px] text-center">
        У вас еще нет аккаунта?{" "}
        <a className="text-blue-600" href="/send-email">
          Зарегистрироваться
        </a>
      </span>
    </div>
  );
};

export default Login;

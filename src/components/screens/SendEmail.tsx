import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import https from "https";
import axios from "../../axios";
const SendEmail = () => {
  const [email, setEmail] = useState("");
  const handleEmail = async () => {
    await axios
      .post("https://api.charity-steps.ru/api/auth/register", { email })
      .then((response) => {
        console.log(response);
        if (typeof window !== "undefined") {
          window.location.href = "/pin-code";
        }
      })
      .catch((err) => {
        console.log("err", err);
      })
      .finally(() => {});
  };

  return (
    <div className="flex flex-col gap-6 px-4 h-full">
      <h1 className="pt-[56px] text-[32px] font-sf-pro-bold leading-[38px] tracking-tighter">
        Регистрация
      </h1>
      <p className="text-[20px] text-neutral-500">
        Введите электронную почту, чтобы получить код подтверждения
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
      <Button className="text-[17px]" size="lg" onClick={handleEmail}>
        Получить код
      </Button>
      <p className="text-[17px] text-neutral-500">
        Нажимая на кнопку вы подтверждаете согласие с{" "}
        <span className="text-neutral-900 font-sf-pro-semibold">
          Политикой конфиденциальности
        </span>
      </p>
      <span className="mt-auto mb-4 text-neutral-400 text-[14px] text-center">
        Уже есть аккаунт?{" "}
        <a className="text-blue-600" href="/login">
          Войти
        </a>
      </span>
    </div>
  );
};

export default SendEmail;

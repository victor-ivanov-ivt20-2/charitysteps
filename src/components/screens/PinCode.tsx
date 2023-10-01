import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactCodeInput from "react-code-input";

const CORRECT_PIN_CODE = "111222";

const PinCode = () => {
  const [isPinCodeValid, setIsPinCodeValid] = useState(true);
  const [pinCode, setPinCode] = useState("");
  const [btnIsPressed, setBtnIsPressed] = useState(false);

  const checkPinCode = () => {
    const isPinCodeValid = pinCode === CORRECT_PIN_CODE;

    setBtnIsPressed(true);
    setIsPinCodeValid(isPinCodeValid);
    if (!isPinCodeValid) setPinCode("");
  };

  const handlePinChange = (pinCode: string) => {
    setPinCode(pinCode);
    setBtnIsPressed(false);
  };

  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((t) => t + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const loginFunction = async () => {
      await login(pinCode);
    };
    if (pinCode.length === 4) {
      loginFunction();
    }
  }, [pinCode]);

  const login = (pinCode: string) => {
    axios
      .post("https://api.charity-steps.ru/api/auth/register/approve", {
        code: pinCode,
      })
      .then((response) => {
        console.log("response", response);
        localStorage.setItem("token", response.data.token);
        if (typeof window !== "undefined") {
          window.location.href = "/register";
        }
      })
      .catch((err) => {
        console.log("err", err);
      })
      .finally(() => {});
  };

  return (
    <div className="flex flex-col gap-6 px-4 h-full">
      <div className="py-3">
        <a href="/send-email" className="text-blue-600">
          Назад
        </a>
      </div>
      <h1 className="text-[32px] font-sf-pro-bold leading-[38px] tracking-tighter">
        Подтвердите электронную почту
      </h1>
      <p className="text-[20px] text-neutral-500">
        На почту {} отправлено письмо с кодом. Введите его здесь:
      </p>
      <ReactCodeInput
        id="pinCode"
        className="mx-auto"
        isValid={isPinCodeValid}
        fields={4}
        onChange={handlePinChange}
        inputStyle={{
          width: "50px",
          borderRadius: "12px",
          marginLeft: "10px",
          fontSize: "20px",
          height: "64px",
          backgroundColor: "#FAFAFA",
          textAlign: "center",
          outlineColor: "#2563EB",
        }}
        value={pinCode}
      />

      <button onClick={checkPinCode} disabled={60 - timer > 0}>
        Отправить код повторно {60 - timer > 0 ? "через" + (60 - timer) : ""}
      </button>
    </div>
  );
};

export default PinCode;

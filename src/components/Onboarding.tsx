import { motion } from "framer-motion";
import Logo from "./icons/Logo";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import Dots from "./Dots";

const Onboarding = () => {
  const [isMobile, setMobile] = useState(false);
  const [count, setCount] = useState(0);
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  const addCount = () => {
    setCount((prev) => prev + 1);
  };

  const StepOne = () => {
    return (
      <div className="flex flex-col py-3 w-full">
        <div className="px-3 flex w-full flex-row-reverse">
          <a href="/send-email" className="text-neutral-400 text-[17px]">
            Пропустить
          </a>
        </div>
        <div className="px-3 py-3 flex flex-col text-[24px] text-neutral-900 leading-[29px]">
          <h1>Charity Steps помогает тем, кто</h1>
          <h1>нуждается поддержке</h1>
        </div>

        <div className="px-3 flex justify-center items-center py-[10px]">
          <Dots active={count} />
        </div>
        <img className="px-3" src="" alt="big image" />
        <Button
          onClick={() => {
            addCount();
          }}
          className="px-3 bg-blue-600 text-[17px] text-white absolute bottom-3 w-full h-[50px]"
        >
          Продолжить
        </Button>
      </div>
    );
  };

  const StepTwo = () => {
    return (
      <div className=" flex flex-col py-3 w-full">
        <div className="px-3 flex w-full flex-row-reverse">
          <a href="/send-email" className="text-neutral-400 text-[17px]">
            Пропустить
          </a>
        </div>
        <div className="px-3 py-3 flex flex-col text-[24px] text-neutral-900 leading-[29px]">
          <h1>Забудьте о скучных и монотонных</h1>
          <h1>тренировках</h1>
        </div>

        <div className="px-3 flex justify-center items-center py-[10px]">
          <Dots active={count} />
        </div>
        <img className="px-3" src="" alt="big image" />
        <div>
          <Button
            onClick={addCount}
            variant="default"
            className="px-3 bg-blue-600 text-[17px] text-white absolute bottom-3 w-full h-[50px]"
          >
            Продолжить
          </Button>
        </div>
      </div>
    );
  };

  const StepThird = () => {
    return (
      <div className=" flex flex-col py-3 w-full">
        <div className="px-3 flex w-full flex-row-reverse ">
          <a href="/send-email" className="text-neutral-400 text-[17px]">
            Пропустить
          </a>
        </div>
        <div className="px-3 py-3 flex flex-col text-[24px] text-neutral-900 leading-[29px]">
          <h1>Участвуйте в соревнованиях с</h1>
          <h1>коллегами, прокачивайте свое тело</h1>
        </div>

        <div className="px-3 flex justify-center items-center py-[10px]">
          <Dots active={count} />
        </div>
        <img className="px-3" src="" alt="big image" />
        <Button className="px-3 bg-blue-600 text-[17px] text-white absolute bottom-3 w-full h-[50px]">
          <a className="w-full h-full" href="/send-email">
            Продолжить
          </a>
        </Button>
      </div>
    );
  };

  const getUserAgent = async () => {
    const response = await fetch("http://localhost:4321/get-user-agent", {
      method: "GET",
    });
    const json = await response.json();
    setMobile(json.userAgent);
  };

  useEffect(() => {
    getUserAgent();
  }, []);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="relative w-full h-full select-none">
      <motion.div
        className="absolute flex justify-center items-center w-full h-full bg-blue-600 z-50"
        animate={{
          opacity: 0,
          transitionEnd: {
            zIndex: -100,
          },
        }}
        initial={{ opacity: 1 }}
        transition={{ delay: 2, ease: "easeInOut", duration: 1 }}
      >
        <motion.div
          className="select-none"
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ ease: "backIn", duration: 1 }}
        >
          <Logo></Logo>
        </motion.div>
      </motion.div>
      {isMobile ? (
        <div className="flex">
          {count === 0 && <StepOne />}
          {count === 1 && <StepTwo />}
          {count === 2 && <StepThird />}
        </div>
      ) : (
        <div>Всё не очень хорошо</div>
      )}
    </div>
  );
};

export default Onboarding;

import { type FC, type PropsWithChildren, useEffect } from "react";

const AuthLayout: FC<PropsWithChildren> = (props) => {
  const { children } = props;

  const authRoutes = ["/", "/send-email", "/register", "/pin-code", "/login"];

  useEffect(() => {
    if (
      localStorage.getItem("token") &&
      localStorage.getItem("name") &&
      window !== undefined
    ) {
      console.log("window.location.pathname", window.location.pathname);
      if (authRoutes.indexOf(window.location.pathname) >= 0) {
        window.location.href = "/main";
      }
    }
  }, []);

  return <>{children}</>;
};
export default AuthLayout;

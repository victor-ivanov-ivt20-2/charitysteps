// я всё понимаю

import NoMobile from "@/components/NoMobile";
import { type FC, type PropsWithChildren, useEffect, useState } from "react";

const MobileOnlyLayout: FC<PropsWithChildren> = (props) => {
  const { children } = props;
  const [isMobile, setMobile] = useState<boolean>(false);

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

  return <>{isMobile ? children : <NoMobile />}</>;
};
export default MobileOnlyLayout;

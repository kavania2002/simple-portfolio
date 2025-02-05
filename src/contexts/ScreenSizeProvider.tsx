import { useEffect, useState } from "react";
import { ScreenSizeContext } from "./ScreenSizeContext";

export const ScreenSizeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isMobile, setIsMobile] = useState<boolean>(
    () => window.matchMedia("(max-width: 767px)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const handleChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <ScreenSizeContext.Provider value={{ isMobile }}>
      {children}
    </ScreenSizeContext.Provider>
  );
};

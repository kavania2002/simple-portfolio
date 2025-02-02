import { createContext, useContext } from "react";

export const ScreenSizeContext = createContext({
  isMobile: false,
});

export const useScreenSize = () => useContext(ScreenSizeContext);

import { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import AboutMeLargeScreen from "./sections/AboutMeLargeScreen";
import AboutMeSmallScreen from "./sections/AboutMeSmallScreen";
import SkillsSmallScreen from "./sections/SkillsSmallScreen";
import { useScreenSize } from "./contexts/ScreenSizeContext";
import ExperienceLargeScreen from "./sections/ExperienceLargeScreen";
import ExperienceSmallScreen from "./sections/ExperienceSmallScreen";

function App() {
  const [loading, setLoading] = useState(true);
  const { isMobile } = useScreenSize();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="overflow-hidden">
      <Loader />
      <div
        className={`bg-primary font-inria-sans transition-all duration-1000 ${
          !loading ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}>
        <div className="snap-y snap-mandatory overflow-y-scroll h-screen">
          <div className="snap-always snap-center h-screen">
            <Navbar />
            <Hero />
          </div>
          {!isMobile && (
            <div className="snap-always snap-center">
              <AboutMeLargeScreen />
            </div>
          )}
          {isMobile && (
            <div className="snap-always snap-center">
              <AboutMeSmallScreen />
            </div>
          )}
          {isMobile && (
            <div className="snap-always snap-center">
              <SkillsSmallScreen />
            </div>
          )}
          {!isMobile && (
            <div className="snap-always snap-center">
              <ExperienceLargeScreen />
            </div>
          )}
          {isMobile && (
            <div className="snap-always snap-center">
              <ExperienceSmallScreen />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

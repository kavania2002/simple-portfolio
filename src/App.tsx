import { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import AboutMeLargeScreen from "./sections/AboutMeLargeScreen";
import AboutMeSmallScreen from "./sections/AboutMeSmallScreen";
import SkillsSmallScreen from "./sections/SkillsSmallScreen";
import { useScreenSize } from "./contexts/ScreenSizeContext";
import ExperienceLargeScreen from "./sections/CareerLargeScreen";
import ExperienceSmallScreen from "./sections/CareerSmallScreen";
import Projects from "./sections/Projects";
import Achievements from "./sections/Achievements";

function App() {
  const [loading, setLoading] = useState(true);
  const { isMobile } = useScreenSize();

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setLoading(false);
      }, 3500);
    };

    window.addEventListener("load", handleLoad);
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <div className="overflow-hidden bg-primary font-inria-sans">
      {loading && <Loader />}
      {!loading && (
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
          <div className="snap-always snap-center">
            <Projects />
          </div>
          <div className="snap-always snap-center">
            <Achievements />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

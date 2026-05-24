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
  const { isMobile } = useScreenSize();

  return (
    <div className="overflow-hidden bg-primary font-inria-sans">
      <div className="snap-y snap-mandatory h-screen scroll-container">
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
    </div>
  );
}

export default App;

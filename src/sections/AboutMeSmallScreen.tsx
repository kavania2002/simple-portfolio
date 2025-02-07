import AboutMeText from "../components/AboutMeText";
import { Reveal } from "../components/Reveal";

const AboutMe = () => {
  return (
    <div id="about-me" className="h-screen px-10 py-6">
      <div className="flex flex-col h-full justify-center gap-y-[5vh]">
        <Reveal controls={{ delay: 0.5 }}>
          <p className="text-[6vh] leading-[6vh] font-bold text-tertiary">
            About Me
          </p>
        </Reveal>
        <AboutMeText />
      </div>
    </div>
  );
};

export default AboutMe;

import AboutMeText from "../components/AboutMeText";
import Divider from "../components/Divider";
import { Reveal } from "../components/Reveal";
import SkillsText from "../components/SkillsText";

const AboutMe = () => {
  return (
    <div
      id="about-me"
      className="h-screen w-full py-4 md:py-8 flex flex-col justify-center gap-y-4 md:gap-y-4">
      <Divider />
      <div className="h-full mx-2 md:mx-2 bg-secondary rounded-2xl md:rounded-[42px]">
        <div className="h-full flex flex-col gap-y-10 justify-center px-10 md:px-24 lg:px-30 xl:px-44 2xl:px-64 py-2">
          <div className="w-full flex items-center justify-between text-[3vh] leading-[4vh] md:leading-tight md:text-xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-white">
            <Reveal controls={{ delay: 0.5 }}>
              <p className="">About Me</p>
            </Reveal>
            <Reveal controls={{ delay: 1 }}>
              <p className="">Skills</p>
            </Reveal>
          </div>

          <div className="w-full flex items-center">
            <AboutMeText />
            <SkillsText />
          </div>
        </div>
      </div>
      <Divider />
    </div>
  );
};

export default AboutMe;

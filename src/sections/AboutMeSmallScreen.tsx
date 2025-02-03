import AboutMeText from "../components/AboutMeText";

const AboutMe = () => {
  return (
    <div className="h-screen px-10 py-2">
      <div className="flex flex-col h-full justify-center gap-y-4">
        <p className="text-[6vh] leading-[6vh] font-bold text-tertiary">About Me</p>
        <AboutMeText />
      </div>
    </div>
  );
};

export default AboutMe;

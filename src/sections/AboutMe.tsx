import Divider from "../components/Divider";

const AboutMe = () => {
  return (
    <div className="h-screen w-full py-4 md:py-10 flex flex-col justify-center gap-y-4 md:gap-y-8">
      <Divider />
      <div className="h-full mx-2 md:mx-8 bg-secondary rounded-2xl md:rounded-[48px]"></div>
      <Divider />
    </div>
  );
};

export default AboutMe;

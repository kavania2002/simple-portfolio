import { FaHandshake } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="h-screen md:px-24 lg:px-36 xl:px-50 2xl:px-64">
      <div className="flex items-center justify-between h-full">
        <div className="flex-1 flex flex-col md:gap-y-1 lg:gap-y-2">
          <p className="md:text-default lg:text-lg xl:text-xl text-secondary">
            Hi, I am
          </p>
          <p className="font-bold md:text-4xl lg:text-5xl xl:text-6xl text-tertiary">
            Kavan Gondalia
          </p>
          <div className="flex flex-col gap-y-1 md:text-lg lg:text-xl xl:text-4xl text-tertiary-850">
            <p>Trying everything</p>
            <p>& finding happiness</p>
          </div>
          <div className="">
            <button className="py-1 px-2 lg:w-32 flex gap-x-2 items-center justify-center rounded-md lg:rounded-lg text-secondary border border-secondary hover:text-white hover:bg-secondary cursor-pointer transition-all duration-300">
              <FaHandshake className="md:text-default lg:text-lg xl:text-xl" />
              <p className="text-xs lg:text-sm font-bold">Hire Me!</p>
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-end">
          <div className="w-60 lg:w-72 2xl:w-90 relative">
            <div className="absolute h-[300px] lg:h-[360px] 2xl:h-[450px] w-60 lg:w-72 2xl:w-90 bg-secondary-250 "></div>
            <div className="z-10 translate-x-[-15px] translate-y-[15px] hover:translate-x-[-10px] hover:translate-y-[10px] transition-transform duration-300">
              <img src="/images/picofme.png" alt="picofme" className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

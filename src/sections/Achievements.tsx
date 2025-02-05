import { FaLink } from "react-icons/fa6";
import { ACHIEVEMENTS } from "../constants/achievements";
import { SOCIALS } from "../constants/socials";

const Achievements = () => {
  return (
    <div className="h-screen w-full px-10 md:px-24 lg:px-36 xl:px-50 2xl:px-64 py-4 md:py-8 lg:py-10 flex flex-col justify-center gap-y-[6vh]">
      <p className="text-[3vh] leading-[4vh] md:leading-tight md:text-xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-tertiary">
        Achievements
      </p>
      <div className="w-full flex flex-col items-center gap-y-[8vh]">
        <div className="flex gap-x-24">
          <div className="flex justify-start ">
            <div className="py-6 w-42 bg-secondary-100 border-2 border-secondary-500 rounded-lg flex flex-col gap-y-4 items-center justify-center">
              <img className="h-[8vh]" src="/images/leetcode.svg" />
              <p className="font-bold text-secondary text-md">Knight 1912</p>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="py-6 w-42 bg-secondary-100 border-2 border-secondary-500 rounded-lg flex flex-col gap-y-4 items-center justify-center">
              <img className="h-[8vh]" src="/images/codeforces.svg" />
              <p className="font-bold text-secondary text-md">
                Specialist 1494
              </p>
            </div>
          </div>
          <div className="flex justify-start ">
            <div className="py-6 w-42 bg-secondary-100 border-2 border-secondary-500 rounded-lg flex flex-col gap-y-4 items-center justify-center">
              <img className="h-[8vh]" src="/images/atcoder.svg" />
              <p className="font-bold text-secondary text-md">847</p>
            </div>
          </div>
        </div>
        <div className="w-full grid grid-cols-2 h-full justify-between gap-8">
          {ACHIEVEMENTS.map((achievement, index) => (
            <div
              key={index}
              className="flex py-4 px-6 bg-secondary-100 border-2 rounded-xl border-secondary-500 items-center justify-between gap-x-4">
              <p className="text-base xl:text-md font-bold text-secondary">
                {achievement.text}
              </p>
              {achievement.link !== "" && (
                <a
                  className="text-lg text-tertiary"
                  href={achievement.link}
                  target="_blank">
                  <FaLink />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-center items-center gap-x-12 pt-[4vh]">
        {SOCIALS.map((social, index) => (
          <a href={social.link} target="_blank">
            <div
              key={index}
              className="lg:h-10 lg:w-10 xl:h-14 xl:w-14 flex items-center justify-center bg-secondary-100 border-2 border-secondary-500 text-tertiary hover:text-primary hover:bg-secondary rounded-full transition-all duration-300">
              {social.icon}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Achievements;

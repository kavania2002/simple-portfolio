import { FaLink } from "react-icons/fa6";
import { ACHIEVEMENTS, CP_ACCOUNTS } from "../constants/achievements";
import { SOCIALS } from "../constants/socials";
import { Reveal } from "../components/Reveal";

const Achievements = () => {
  return (
    <div
      id="achievements"
      className="h-screen w-full py-4 md:py-8 lg:py-10 flex flex-col">
      <div className="h-full flex flex-col justify-center gap-y-[5vh] md:gap-y-[6vh]">
        <Reveal controls={{ delay: 0.5 }}>
          <p className="px-10 md:px-24 lg:px-36 xl:px-50 2xl:px-64 text-[6vh] leading-[6vh] md:leading-tight md:text-xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-tertiary">
            Achievements
          </p>
        </Reveal>
        <div className="px-10 md:px-24 lg:px-36 xl:px-50 2xl:px-64 w-full flex flex-col items-center gap-y-[4vh] md:gap-y-[8vh]">
          <div className="grid grid-cols-2 md:flex md:flex-row gap-2 md:gap-x-24">
            {CP_ACCOUNTS.map((account, index) => (
              <Reveal
                key={index}
                className={`${index == 0 && "col-span-2 justify-self-center"}`}
                controls={{ delay: 0.5 + (index + 1) * 0.1 }}>
                <a href={account.link} target="_blank">
                  <div
                    key={index}
                    className="py-4 md:py-6 w-32 md:w-42 bg-secondary-100 border-2 border-secondary-500 rounded-lg flex flex-col gap-y-2 md:gap-y-4 items-center justify-center cursor-pointer">
                    <img
                      className="h-[4vh] md:h-[8vh]"
                      src={`/images/${account.platform}.svg`}
                    />
                    <p className="font-bold text-secondary text-base md:text-md">
                      {account.text}
                    </p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 h-full justify-between gap-4 md:gap-8">
            {ACHIEVEMENTS.map((achievement, index) => (
              <Reveal key={index} controls={{ delay: 0.5 + (index + 1) * 0.1 }}>
                <div className="flex h-[8vh] md:h-[10vh] py-2 md:py-4 px-6 bg-secondary-100 border-2 rounded-xl border-secondary-500 items-center justify-between gap-x-4">
                  <p className="text-base xl:text-md font-bold text-secondary">
                    {achievement.text}
                  </p>
                  {achievement.link !== "" && (
                    <a
                      className="text-md md:text-lg text-tertiary"
                      href={achievement.link}
                      target="_blank">
                      <FaLink />
                    </a>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="px-10 md:px-24 lg:px-36 xl:px-50 2xl:px-64 w-full flex justify-center items-center gap-x-12 md:pt-[4vh]">
          {SOCIALS.map((social, index) => (
            <Reveal key={index} controls={{ delay: 0.5 + (index + 1) * 0.1 }}>
              <a href={social.link} target="_blank">
                <div
                  key={index}
                  className="h-10 w-10 xl:h-14 xl:w-14 flex items-center justify-center bg-secondary-100 border-2 border-secondary-500 text-tertiary hover:text-primary hover:bg-secondary rounded-full transition-all duration-300">
                  {social.icon}
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;

import Divider from "../components/Divider";
import { SKILLS } from "../constants/skills";

const AboutMe = () => {
  return (
    <div className="h-screen w-full py-4 md:py-8 flex flex-col justify-center gap-y-4 md:gap-y-8">
      <Divider />
      <div className="h-full mx-2 md:mx-6 bg-secondary rounded-2xl md:rounded-[48px]">
        <div className="h-full flex flex-col gap-y-10 justify-center px-10 md:px-24 lg:px-30 xl:px-44 2xl:px-64 py-2">
          <div className="w-full flex items-center justify-between text-[3vh] leading-[4vh] md:leading-tight md:text-xl lg:text-3xl xl:text-4xl font-bold text-white">
            <p className="">About Me</p>
            <p className="">Skills</p>
          </div>

          <div className="w-full flex items-center">
            <div className="h-full flex-1 flex flex-col justify-start gap-y-4 text-[16px] xl:text-[16px] 2xl:text-[24px] text-white">
              <p>
                I'm an explorer at heart, constantly seeking new
                challenges—whether in life or in code. I find joy in learning,
                experimenting, and building things that push the boundaries of
                creativity and logic.
              </p>
              <p>
                As a backend-focused full-stack developer, I thrive on solving
                complex problems and optimizing systems for efficiency. My
                fascination with software began in school, and since then,
                computers have been an inseparable part of my journey.
              </p>
              <p>
                Beyond just writing code, I enjoy understanding the "why" behind
                problems, breaking them down, and crafting elegant, scalable
                solutions. When I step away from my screen, I find peace in
                jogging with music on, letting my mind wander as I recharge for
                the next challenge.
              </p>
            </div>

            <div className="h-full flex-1 flex flex-col gap-y-4 text-white justify-start items-end">
              {SKILLS.map((skills, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-y-2 items-end w-3/4">
                  <p className="text-[20px] xl:text-[24px] 2xl:text-[28px] font-bold">
                    {skills.type}
                  </p>
                  <div className="flex flex-wrap text-right justify-end gap-x-1 gap-y-1 text-xs 2xl:text-sm">
                    {skills.list.map((skill, index) => (
                      <p
                        className="bg-primary rounded-full text-secondary px-6 py-1"
                        key={index}>
                        {skill}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Divider />
    </div>
  );
};

export default AboutMe;

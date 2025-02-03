import { SKILLS } from "../constants/skills";

const SkillsText = () => {
  return (
    <div className="md:h-full md:flex-1 flex flex-col gap-y-8 justify-center md:justify-start md:items-end">
      {SKILLS.map((skills, index) => (
        <div
          key={index}
          className="flex flex-col gap-y-4 md:gap-y-2 md:items-end w-full md:w-3/4">
          <p className="text-[3vh] md:text-base xl:text-lg 2xl:text-xl font-bold text-tertiary md:text-white">
            {skills.type}
          </p>
          <div className="flex flex-wrap md:text-right md:justify-end gap-x-1 gap-y-2 md:gap-y-1 text-[2vh] md:text-sm 2xl:text-base font-bold">
            {skills.list.map((skill, index) => (
              <p
                className="bg-secondary md:bg-primary rounded-full text-primary md:text-secondary px-6 py-1"
                key={index}>
                {skill}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsText;

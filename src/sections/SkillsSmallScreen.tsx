import SkillsText from "../components/SkillsText";

const Skills = () => {
  return (
    <div className="h-screen px-10">
      <div className="flex flex-col h-full justify-center gap-y-4">
        <p className="text-[6vh] leading-[6vh] font-bold text-tertiary">
          Skills
        </p>
        <SkillsText />
      </div>
    </div>
  );
};

export default Skills;

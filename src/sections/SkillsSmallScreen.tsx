import SkillsText from "../components/SkillsText";

const Skills = () => {
  return (
    <div id="skills" className="h-screen px-10 py-6">
      <div className="flex flex-col h-full justify-center gap-y-[5vh]">
        <p className="text-[6vh] leading-[6vh] font-bold text-tertiary">
          Skills
        </p>
        <SkillsText />
      </div>
    </div>
  );
};

export default Skills;

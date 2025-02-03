import Divider from "../components/Divider";
import SkillsText from "../components/SkillsText";

const Skills = () => {
  return (
    <div className="h-screen px-10 py-6">
      <Divider />
      <div className="flex flex-col h-full justify-center gap-y-4">
        <p className="text-[6vh] leading-[6vh] font-bold text-tertiary">
          Skills
        </p>
        <SkillsText />
      </div>
      <Divider />
    </div>
  );
};

export default Skills;

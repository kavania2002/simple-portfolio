import { useState } from "react";
import { EXPERIENCES } from "../constants/experience";

const Experience = () => {
  const [experienceType, setExperienceType] = useState("work");
  const [selectedCompany, setSelectedCompany] = useState(0);

  const changeExperienceType = (type: string) => {
    setExperienceType(type);
    setSelectedCompany(0);
  };

  return (
    <div id="experience" className="h-screen py-6">
      <div className="h-full py-4 flex flex-col gap-y-6">
        <p className="px-10 text-[6vh] leading-[6vh] font-bold text-tertiary">
          Experience
        </p>
        <div className="w-full bg-secondary-300">
          <div className="flex items-center justify-center text-center text-[4.5vw] font-bold text-tertiary p-2">
            {EXPERIENCES.map((experience, index) => (
              <button
                key={index}
                className={`flex-1 py-1 px-4 rounded-lg cursor-pointer ${
                  experience.type === experienceType && "bg-primary shadow-md"
                }`}
                onClick={() => changeExperienceType(experience.type)}>
                {experience.label}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <div className="w-full">
            {EXPERIENCES.map(
              (experience) =>
                experience.type === experienceType && (
                  <div
                    className={`overflow-x-auto flex ${
                      experience.data.length > 2 && "whitespace-nowrap"
                    }`}>
                    {experience.data.map((experienceData, index) => (
                      <div
                        key={index}
                        onClick={() => setSelectedCompany(index)}
                        className={`font-bold text-secondary text-[1.8vh] py-2 px-4 text-center border-b-3 cursor-pointer ${
                          selectedCompany === index
                            ? "bg-secondary-300 border-tertiary"
                            : "border-secondary-500"
                        } ${experience.data.length === 2 && "flex-1"}
                      `}>
                        {experienceData.company}
                      </div>
                    ))}
                  </div>
                )
            )}
          </div>
          <div className="h-full px-10 flex flex-col gap-y-4">
            {EXPERIENCES.map(
              (experience) =>
                experience.type === experienceType &&
                experience.data.map(
                  (experienceData, index) =>
                    selectedCompany === index &&
                    experienceData.experiences.map((experience, index) => (
                      <div key={index} className="flex flex-col gap-y-3">
                        <div className="flex flex-col lg:gap-y-2">
                          <div className="text-tertiary text-[2.2vh] font-bold flex justify-between items-center gap-x-2">
                            {experience.role}
                            {experience.place !== "" && (
                              <p className="bg-secondary font-bold text-primary rounded-full text-[1vh] px-3 py-1 whitespace-nowrap">
                                {experience.place}
                              </p>
                            )}
                          </div>
                          <div className="text-tertiary font-light text-[1.2vh]">
                            {experience.duration}
                          </div>
                        </div>
                        <div className="text-secondary text-[1.6vh]">
                          {experience.description.map((desc, index) => (
                            <div key={index} className="py-2">
                              {desc}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

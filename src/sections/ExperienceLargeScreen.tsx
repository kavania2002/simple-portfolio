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
    <div
      id="experience"
      className="h-screen w-full px-10 md:px-24 lg:px-36 xl:px-50 2xl:px-64 py-4 md:py-8 lg:py-10 flex flex-col gap-y-6">
      <p className="text-[3vh] leading-[4vh] md:leading-tight md:text-xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-tertiary">
        Experience
      </p>
      <div className="w-full bg-secondary-300 rounded-lg">
        <div className="flex items-center justify-center text-center text-md font-bold text-tertiary p-2">
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
      <div className="w-full flex gap-x-8">
        <div className="flex flex-col gap-y-0 justify-start">
          {EXPERIENCES.map((experience) => {
            return (
              experience.type === experienceType &&
              experience.data.map((experienceData, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedCompany(index)}
                  className={`${
                    selectedCompany === index
                      ? "bg-secondary-300 border-tertiary rounded-r-lg"
                      : "border-secondary-500"
                  } w-48  border-l-4 lg:text-base xl:text-md font-bold py-4 px-4 cursor-pointer text-center text-secondary`}>
                  {experienceData.company}
                </div>
              ))
            );
          })}
        </div>
        <div className="flex-1 flex flex-col gap-y-6">
          {EXPERIENCES.map((experience) => {
            return (
              experience.type === experienceType &&
              experience.data.map(
                (experienceData, index) =>
                  selectedCompany === index &&
                  experienceData.experiences.map((experience, index) => (
                    <div key={index} className="flex flex-col lg:gap-y-2">
                      <div className="">
                        <div className="flex items-center justify-between">
                          <p className="text-xl 2xl:text-3xl font-bold text-tertiary">
                            {experience.role}
                          </p>
                          {experience.place !== "" && (
                            <p className="bg-secondary font-bold text-primary rounded-full text-sm px-6 py-1">
                              {experience.place}
                            </p>
                          )}
                        </div>
                        <p className="-mt-1 2xl:mt-0 text-md 2xl:text-lg font-light text-tertiary">
                          {experience.duration}
                        </p>
                      </div>
                      <ul className="list-disc text-md lg:text-[14px] xl:text-base 2xl:text-[22px] font-normal text-secondary">
                        {experience.description.map((desc, index) => (
                          <li className="py-1 2xl:py-2" key={index}>
                            {desc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;

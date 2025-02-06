import { useState } from "react";
import { CAREER } from "../constants/career";

const Career = () => {
  const [careerType, setCareerType] = useState("work");
  const [selectedOrg, setSelectedOrg] = useState(0);

  const changeCareerType = (type: string) => {
    setCareerType(type);
    setSelectedOrg(0);
  };

  return (
    <div id="career" className="h-screen py-6">
      <div className="h-full py-4 flex flex-col gap-y-6">
        <p className="px-10 text-[6vh] leading-[6vh] font-bold text-tertiary">
          Career
        </p>
        <div className="w-full bg-secondary-300">
          <div className="flex items-center justify-center text-center text-[4.5vw] font-bold text-tertiary p-2">
            {CAREER.map((career, index) => (
              <button
                key={index}
                className={`flex-1 py-1 px-4 rounded-lg cursor-pointer ${
                  career.type === careerType && "bg-primary shadow-md"
                }`}
                onClick={() => changeCareerType(career.type)}>
                {career.label}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <div className="w-full">
            {CAREER.map(
              (career) =>
                career.type === careerType && (
                  <div
                    className={`overflow-x-auto flex ${
                      career.data.length > 2 && "whitespace-nowrap"
                    }`}>
                    {career.data.map((careerData, index) => (
                      <div
                        key={index}
                        onClick={() => setSelectedOrg(index)}
                        className={`font-bold text-secondary text-[1.8vh] py-2 px-4 text-center border-b-3 cursor-pointer ${
                          selectedOrg === index
                            ? "bg-secondary-300 border-tertiary"
                            : "border-secondary-500"
                        } ${career.data.length === 2 && "flex-1"}
                      `}>
                        {careerData.company}
                      </div>
                    ))}
                  </div>
                )
            )}
          </div>
          <div className="h-full px-10 flex flex-col gap-y-4">
            {CAREER.map(
              (career) =>
                career.type === careerType &&
                career.data.map(
                  (careerData, index) =>
                    selectedOrg === index &&
                    careerData.careers.map((career, index) => (
                      <div key={index} className="flex flex-col gap-y-3">
                        <div className="flex flex-col lg:gap-y-2">
                          <div className="text-tertiary text-[2.2vh] font-bold flex justify-between items-center gap-x-2">
                            {career.role}
                            {career.place !== "" && (
                              <p className="bg-secondary font-bold text-primary rounded-full text-[1vh] px-3 py-1 whitespace-nowrap">
                                {career.place}
                              </p>
                            )}
                          </div>
                          <div className="text-tertiary font-light text-[1.2vh]">
                            {career.duration}
                          </div>
                        </div>
                        <div className="text-secondary text-[1.6vh]">
                          {career.description.map((desc, index) => (
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

export default Career;

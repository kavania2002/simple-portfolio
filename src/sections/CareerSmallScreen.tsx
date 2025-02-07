import { useState } from "react";
import { CAREER } from "../constants/career";
import { Reveal } from "../components/Reveal";
import { motion } from "framer-motion";

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
        <Reveal controls={{ delay: 0.3 }}>
          <p className="px-10 text-[6vh] leading-[6vh] font-bold text-tertiary">
            Career
          </p>
        </Reveal>
        <Reveal controls={{ delay: 0.3 }}>
          <div className="w-full bg-secondary-300">
            <div className="flex items-center justify-center text-center text-[4.5vw] font-bold text-tertiary p-2">
              {CAREER.map((career, index) => (
                <div key={index} className="flex-1 relative">
                  <button
                    className="w-full py-1 px-4 cursor-pointer relative z-10"
                    onClick={() => changeCareerType(career.type)}>
                    {career.label}
                  </button>
                  {career.type === careerType && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute top-0 left-0 w-full h-full bg-primary rounded-lg"
                      transition={{
                        type: "spring",
                        stiffness: 250,
                        damping: 20,
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
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
                      <Reveal
                        key={index}
                        className={career.data.length === 2 ? "flex-1" : ""}
                        controls={{
                          delay: 0.3 + (index + 1) * 0.1,
                        }}>
                        <div
                          onClick={() => setSelectedOrg(index)}
                          className={`font-bold text-secondary text-[1.8vh] py-2 px-4 text-center border-b-3 cursor-pointer ${
                            selectedOrg === index
                              ? "bg-secondary-300 border-tertiary"
                              : "border-secondary-500"
                          } 
                      `}>
                          {careerData.company}
                        </div>
                      </Reveal>
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
                      <Reveal
                        key={index}
                        controls={{
                          delay: 0.3 + (index + 1) * 0.1,
                        }}>
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
                      </Reveal>
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

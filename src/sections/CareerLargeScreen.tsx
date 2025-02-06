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
    <div
      id="career"
      className="h-screen w-full px-10 md:px-24 lg:px-36 xl:px-50 2xl:px-64 py-4 md:py-8 lg:py-10 flex flex-col gap-y-6">
      <p className="text-[3vh] leading-[4vh] md:leading-tight md:text-xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-tertiary">
        Career
      </p>
      <div className="w-full bg-secondary-300 rounded-lg">
        <div className="flex items-center justify-center text-center text-md font-bold text-tertiary p-2">
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
      <div className="w-full flex gap-x-8">
        <div className="flex flex-col gap-y-0 justify-start">
          {CAREER.map((career) => {
            return (
              career.type === careerType &&
              career.data.map((careerData, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedOrg(index)}
                  className={`${
                    selectedOrg === index
                      ? "bg-secondary-300 border-tertiary rounded-r-lg"
                      : "border-secondary-500"
                  } w-48  border-l-4 lg:text-base xl:text-md font-bold py-4 px-4 cursor-pointer text-center text-secondary`}>
                  {careerData.company}
                </div>
              ))
            );
          })}
        </div>
        <div className="flex-1 flex flex-col gap-y-6">
          {CAREER.map((career) => {
            return (
              career.type === careerType &&
              career.data.map(
                (careerData, index) =>
                  selectedOrg === index &&
                  careerData.careers.map((career, index) => (
                    <div key={index} className="flex flex-col lg:gap-y-2">
                      <div className="">
                        <div className="flex items-center justify-between">
                          <p className="text-xl 2xl:text-3xl font-bold text-tertiary">
                            {career.role}
                          </p>
                          {career.place !== "" && (
                            <p className="bg-secondary font-bold text-primary rounded-full text-sm px-6 py-1">
                              {career.place}
                            </p>
                          )}
                        </div>
                        <p className="-mt-1 2xl:mt-0 text-md 2xl:text-lg font-light text-tertiary">
                          {career.duration}
                        </p>
                      </div>
                      <ul className="list-disc text-md lg:text-[14px] xl:text-base 2xl:text-[22px] font-normal text-secondary">
                        {career.description.map((desc, index) => (
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

export default Career;

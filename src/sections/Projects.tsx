import { useState } from "react";
import Divider from "../components/Divider";
import { PROJECTS } from "../constants/projects";
import { FaProductHunt, FaGithub, FaLink } from "react-icons/fa6";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import { useScreenSize } from "../contexts/ScreenSizeContext";

const Projects = () => {
  const { isMobile } = useScreenSize();
  const [projects, setProjects] = useState(PROJECTS.slice(0, 4));
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = (show: boolean) => {
    if (show) {
      setProjects(PROJECTS);
    } else {
      setProjects(PROJECTS.slice(0, 4));
    }
    setShowMore(show);
  };

  return (
    <div
      id="projects"
      className="h-screen w-full py-4 md:py-8 flex flex-col justify-center gap-y-4 md:gap-y-4">
      {!isMobile && <Divider className="px-10" />}
      <div className="h-full md:mx-2 md:bg-secondary rounded-2xl md:rounded-[42px] md:px-24 lg:px-30 xl:px-44 2xl:px-64">
        <div className="h-full flex flex-col gap-y-5 justify-center md:py-2">
          <p className="w-full text-[6vh] leading-[6vh] md:leading-tight px-10 md:px-0 md:text-xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-tertiary md:text-primary">
            Projects
          </p>
          <SimpleBar
            style={{
              maxHeight: `${!isMobile} ? '65vh' : '75vh'`,
            }}
            className={`h-[75vh] md:h-[65vh] px-4 md:px-0 ${
              showMore && !isMobile && "project-box"
            }`}>
            {projects.map((project, index) => (
              <div
                className="relative flex flex-col h-[32vh] md:h-[29vh] gap-y-[1vh] p-[2.5vh] px-6 bg-secondary md:bg-primary text-primary md:text-secondary rounded-xl shadow-lg"
                key={index}>
                <div className="flex justify-between items-baseline">
                  <p className="text-[3vh] md:text-[3.5vh] font-bold ">
                    {project.title}
                  </p>
                  <div
                    className={`absolute right-4 top-[3.6vh] md:static flex ${
                      isMobile
                        ? "flex-col items-end gap-y-2"
                        : "items-center gap-x-2"
                    } text-tertiary text-[2.5vh]`}>
                    {project.productHuntLink && (
                      <a href={project.productHuntLink} target="_blank">
                        <FaProductHunt />
                      </a>
                    )}
                    {project.githubLink && (
                      <a href={project.githubLink} target="_blank">
                        <FaGithub />
                      </a>
                    )}
                    {project.hostedLink && (
                      <a href={project.hostedLink} target="_blank">
                        <FaLink />
                      </a>
                    )}
                  </div>
                </div>
                <div className="w-5/6 flex-1">
                  <p className="font-light text-[1.8vh] md:text-[2.1vh]">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-x-2">
                  {project.skills.map((skill, index) => (
                    <p
                      className="bg-primary md:bg-secondary text-sm rounded-full text-secondary md:text-primary px-4 py-1"
                      key={index}>
                      {skill}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </SimpleBar>
          <div className="w-full flex justify-center items-center">
            <button
              onClick={() => handleShowMore(!showMore)}
              className="text-base md:text-md px-6 py-2 bg-secondary  md:bg-primary text-primary md:text-tertiary shadow-2xl rounded-lg font-bold cursor-pointer">
              {showMore ? "Show Less" : "Show More"}
            </button>
          </div>
        </div>
      </div>
      {!isMobile && <Divider className="px-10" />}
    </div>
  );
};

export default Projects;

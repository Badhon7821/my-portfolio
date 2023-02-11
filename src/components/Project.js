import { useProjectLeftRightReveal } from "../hooks/gsap";
import { useHoverEffect } from "../hooks/useHoverEffect";

import { useRef } from "react";

const Project = ({ project }) => {
  const projectRightRef = useRef(null);
  const projectLeftRef = useRef(null);
  const projectTitleRef = useRef(null);
  const projectDescRef = useRef(null);
  const projectNumberRef = useRef(null);
  const projectToolsRef = useRef(null);
  const projectBtnRef = useRef(null);

  const projectReveal = [
    projectNumberRef,
    projectTitleRef,
    projectDescRef,
    projectToolsRef,
    projectBtnRef,
  ];

  const projectsRefs = [projectRightRef, projectLeftRef];

  useProjectLeftRightReveal(projectsRefs);
  useProjectLeftRightReveal(projectReveal);

  useHoverEffect(projectRightRef, project.img1, project.img2);

  return (
    <div className="project grid grid-cols-1 lg:grid-cols-6 ">
      <div className="project-left lg:col-span-4  flex flex-col gap-8 ">
        <span ref={projectNumberRef} className="text-8xl text-white/20">
          {String(project.id).padStart(2, 0)}
        </span>
        <h3
          ref={projectTitleRef}
          className="uppercase text-5xl leading-relaxed text-cyan-400"
        >
          {project.title}
        </h3>
        <p ref={projectDescRef} className="text-2xl text-white/75">
          {project.description}
        </p>
        <span
          ref={projectToolsRef}
          className="text-cyan-400 flex gap-5 flex-wrap text-2xl"
        >
          {project.tools.map((tool, i) => (
            <span key={i}>{tool}</span>
          ))}
        </span>
        <div className="flex gap-4 flex-wrap">
          <a
            ref={projectBtnRef}
            href={project.liveLink}
            target="_blank"
            rel="noreferrer"
            className="uppercase py-6 px-8 border border-white/20 rounded-full hover:bg-cyan-400/20 hover:border-cyan-400/20 duration-500"
          >
            Live Site
          </a>
          <a
            ref={projectBtnRef}
            href={project.frontEndLink}
            target="_blank"
            rel="noreferrer"
            className="uppercase py-6 px-8 border border-white/20 rounded-full hover:bg-cyan-400/20 hover:border-cyan-400/20 duration-500"
          >
            Front-End Code
          </a>
          {project.backEndLink && (
            <a
              ref={projectBtnRef}
              href={project.backEndLink}
              target="_blank"
              rel="noreferrer"
              className="uppercase py-6 px-8 border border-white/20 rounded-full hover:bg-cyan-400/20 hover:border-cyan-400/20 duration-500"
            >
              Back-End Code
            </a>
          )}
        </div>
      </div>
      <div
        className="project-right col-span-2 row-start-1 lg:row-auto lg:justify-self-end mt-6 "
        ref={projectRightRef}
      ></div>
    </div>
  );
};

export default Project;

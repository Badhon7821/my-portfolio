import SectionTitle from "./SectionTitle";
import { useSkillLineReveal, useSkillTextReveal } from "../hooks/gsap";
import { useRef } from "react";

const data = [
  { id: 1, title: "HTML" },
  { id: 2, title: "CSS" },
  { id: 3, title: "Bootstrap" },
  { id: 4, title: "Tailwind CSS" },
  { id: 5, title: "JavaScript" },
  { id: 6, title: "React.js" },
  { id: 7, title: "React Router" },
  { id: 8, title: "Redux.js" },
  { id: 9, title: "Redux Toolkit" },
  { id: 10, title: "Axios" },
  { id: 11, title: "GSAP" },
  { id: 12, title: "Firebase" },
];

const Skills = () => {
  const skillItemRef = useRef([]);
  const skillItem2Ref = useRef([]);
  const skillTextRef = useRef([]);
  const skillText2Ref = useRef([]);

  useSkillLineReveal(skillItemRef.current);
  useSkillLineReveal(skillItem2Ref.current);
  useSkillTextReveal(skillTextRef.current);
  useSkillTextReveal(skillText2Ref.current);

  return (
    <div className="container mx-auto mt-40" id="skills">
      <SectionTitle title={"SKILLS"} />
      <div className="skill-wrapper grid grid-cols-1 lg:grid-cols-2 gap-10 mt-20">
        <ul className="skill-left">
          {data
            .filter((_, i) => i < Math.floor(data.length / 2))
            .map((skill, i) => (
              <li
                key={skill.id}
                className="skill-item overflow-hidden"
                ref={(el) => (skillItemRef.current[i] = el)}
              >
                <div
                  className="flex gap-10 items-baseline"
                  ref={(el) => (skillTextRef.current[i] = el)}
                >
                  <span className="skill-number text-white/50">
                    {String(skill.id).padStart(2, 0).padEnd(3, ".")}
                  </span>
                  <span className="skill-name">{skill.title}</span>
                </div>
              </li>
            ))}
        </ul>
        <ul className="skill-right">
          {data
            .filter((_, i) => i >= Math.floor(data.length / 2))
            .map((skill, i) => (
              <li
                key={skill.id}
                className="skill-item overflow-hidden"
                ref={(el) => (skillItem2Ref.current[i] = el)}
              >
                <div
                  className="flex gap-10 items-baseline"
                  ref={(el) => (skillText2Ref.current[i] = el)}
                >
                  <span className="skill-number text-white/50">
                    {String(skill.id).padStart(2, 0).padEnd(3, ".")}
                  </span>
                  <span className="skill-name">{skill.title}</span>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;

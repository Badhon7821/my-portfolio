import SectionTitle from "./SectionTitle";

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
  return (
    <div className="container mx-auto mt-40">
      <SectionTitle title={"SKILLS"} />
      <div className="skill-wrapper grid grid-cols-2 gap-10 mt-20">
        <ul className="skill-left">
          {data
            .filter((_, i) => i < Math.floor(data.length / 2))
            .map((skill, i) => (
              <li key={skill.id} className="skill-item overflow-hidden">
                <div className="flex gap-10 items-baseline">
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
              <li key={skill.id} className="skill-item overflow-hidden">
                <div className="flex gap-10 items-baseline">
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

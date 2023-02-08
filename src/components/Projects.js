import Project from "./Project";
import SectionTitle from "./SectionTitle";

const data = [
  {
    id: 1,
    title: "TECH ALPHA - digital electronics product service",
    img1: "https://res.cloudinary.com/dpkbthpcw/image/upload/v1675265033/Personal%20Portfolio%202/torque-1_hqxafc.jpg",
    img2: "https://res.cloudinary.com/dpkbthpcw/image/upload/v1675265034/Personal%20Portfolio%202/torque-2_fawp9c.png",
    description:
      "Shopping cart functionality has been implemented using Redux Toolkit. All the product data has been served via JSON server and fetched using RTK Query. Cart items also saved into the local storage of the client’s browser",
    tools: [
      "React.js",
      "Redux",
      "Tailwind CSS",
      "Redux toolkit",
      "React toastify",
      "Axios",
    ],
    liveLink: "https://lucky-cuchufli-f6a430.netlify.app/",
    frontEndLink: "https://github.com/Badhon7821/tech-alpha",
  },
  {
    id: 2,
    title: "FOOD VERSE — AN FOOD STORE",
    img1: "https://res.cloudinary.com/dpkbthpcw/image/upload/v1675265034/Personal%20Portfolio%202/shopping-1_nx6sfr.jpg",
    img2: "https://res.cloudinary.com/dpkbthpcw/image/upload/v1675265034/Personal%20Portfolio%202/shopping-2_z3boxd.jpg",
    description:
      "Recipe functionality has been implemented using React. All the product data has been served via JSON server and fetched. Cart items also saved into the local storage of the client’s browser and add favorite cart and view this favourites page",
    tools: ["React.js", "Tailwind CSS"],
    liveLink: "https://deluxe-souffle-9a6977.netlify.app/favourites",
    frontEndLink: "https://www.google.com",
  },
];

const Projects = () => {
  return (
    <div className="projects container mx-auto mt-40" id="projects">
      <div className="overflow-hidden">
        <div>
          <SectionTitle title={"my projects"} />
        </div>
      </div>

      <div className="projects-wrapper mt-40 flex flex-col gap-40">
        {data.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

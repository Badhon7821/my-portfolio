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
    title: "IMMEMORIAL — AN ETHICAL CANVAS",
    img1: "https://res.cloudinary.com/deg5bflae/image/upload/v1675934371/my-portfolio/Screenshot_1_pxwouz.png",
    img2: "https://res.cloudinary.com/dpkbthpcw/image/upload/v1675265034/Personal%20Portfolio%202/shopping-2_z3boxd.jpg",
    description:
      "immemorial website is fully animated website. This website created by React, animation by gsap animation and style by css framework tailwind css",
    tools: ["React.js", "Tailwind CSS", "gsap"],
    liveLink: "https://classy-selkie-de8933.netlify.app/",
    frontEndLink: "https://github.com/Badhon7821/immemorial-gsap-animation",
  },
  {
    id: 3,
    title: "REACT TODO APP - CREATE, READ, UPDATE and DELETE application ",
    img1: "https://res.cloudinary.com/deg5bflae/image/upload/v1676094309/my-portfolio/react-todo-app-img1_a2hhid.png",
    img2: "https://res.cloudinary.com/deg5bflae/image/upload/v1676094309/my-portfolio/react-todo-app-img2_h0paek.png",
    description:
      "React todo app is created by only react.js. It has included API, this API created by the JSON server. Any task creates, read, update, and delete in real-time in this app. When a task adds then this task is firstly put JSON server and then the post the task list. This task will be deleted when clicking the delete button and when clicking the update button then this task will be updated from the JSON server. It has functionality implemented by React.js and UI completed by a tailwind CSS. ",
    tools: ["React.js", "Tailwind CSS"],
    liveLink: "https://voluble-youtiao-ecfbb5.netlify.app/",
    frontEndLink: "https://github.com/Badhon7821/react-todo-app",
  },
];

const Projects = () => {
  return (
    <div
      className="projects container md:container  mx-auto mt-40"
      id="projects"
    >
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

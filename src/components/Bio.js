import { useRef } from "react";
import { useBioReveal } from "../hooks/gsap";

const Bio = () => {
  const bioRef = useRef(null);

  useBioReveal(bioRef, 2);

  return (
    <div className="bio mt-14 container mx-auto overflow-hidden text-2xl">
      <p ref={bioRef}>
        I am a Front-End Developer specialized in building responsive web
        applications using React, Redux, Tailwind CSS and GSAP. I am expertise
        on UI design, animation, functional solutions and focus on delivering
        user-friendly websites and applications. I am dedicated to delivering
        high-quality work and staying up-to-date with the latest web development
        trends.
      </p>
    </div>
  );
};

export default Bio;

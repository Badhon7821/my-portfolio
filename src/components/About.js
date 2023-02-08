import { useRef } from "react";
import { useHoverEffect } from "../hooks/useHoverEffect";
import SectionTitle from "./SectionTitle";
import {
  useProjectLeftRightReveal,
  useAboutLeftRightReveal,
} from "../hooks/gsap";

const data = {
  img1: "https://res.cloudinary.com/deg5bflae/image/upload/v1675852629/my-portfolio/1675851263073_fgqonp.jpg",
  img2: "https://res.cloudinary.com/deg5bflae/image/upload/v1675852651/my-portfolio/1675851430919_bjgu2y.jpg",
};

const About = () => {
  const aboutLeftRef = useRef(null);
  const aboutRightRef = useRef(null);
  const aboutDescRef = useRef(null);
  const aboutDescRef1 = useRef(null);
  const aboutLinkRef = useRef(null);

  const abouts = [aboutLeftRef, aboutRightRef];
  const aboutsDesc = [aboutDescRef, aboutDescRef1, aboutLinkRef];

  useProjectLeftRightReveal(abouts);
  useProjectLeftRightReveal(aboutsDesc);

  useHoverEffect(aboutLeftRef, data.img1, data.img2);
  return (
    <div className="container mx-auto mt-40" id="about">
      <SectionTitle title={"ABOUT"} />
      <div className="about-wrapper mt-40 grid grid-cols-2 gap-20 overflow-hidden">
        <div className="about-left" ref={aboutLeftRef}></div>
        <div className="about-right">
          <p ref={aboutDescRef}>
            I am a front-end developer with a strong focus on React, Redux, and
            Tailwind CSS. I specialize in building responsive and user-friendly
            web applications that provide a user friendly service. With my
            in-depth knowledge of the latest web development technologies and
            frameworks, I am able to create easy solution for my clients.
          </p>
          <p ref={aboutDescRef1} className="mt-10">
            In addition to my expertise in the front-end developer, I also have
            a strong background in UI design and animation. I am skilled in
            using the GreenSock Animation Platform (GSAP) library to create
            dynamic and engaging user interfaces.
          </p>
          <a
            ref={aboutLinkRef}
            href="https://www.google.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-10 uppercase py-8 px-14 border border-white/20 rounded-full hover:bg-cyan-400/20 hover:border-cyan-400/20 duration-500"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;

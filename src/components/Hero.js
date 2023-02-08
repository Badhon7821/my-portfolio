import { useRef } from "react";
import { useHoverEffect } from "../hooks/useHoverEffect";
import { useImageReveal, useHeadlineReveal } from "../hooks/gsap";

const data = {
  img1: "https://res.cloudinary.com/deg5bflae/image/upload/v1675853724/my-portfolio/pexels-sora-shimazaki-5926382_pmunqq.jpg",
  img2: "https://res.cloudinary.com/deg5bflae/image/upload/v1675853741/my-portfolio/pexels-sora-shimazaki-5926389_s34sqs.jpg",
};

const Hero = () => {
  const heroImageRef = useRef(null);
  const heroHeadline1Ref = useRef(null);
  const heroHeadline2Ref = useRef(null);

  const headlines = [heroHeadline1Ref, heroHeadline2Ref];

  useHoverEffect(heroImageRef, data.img1, data.img2);
  useImageReveal(heroImageRef, 0.5);
  useHeadlineReveal(headlines, 1.5);

  return (
    <div className="hero container mx-auto mt-14 flex justify-center items-center overflow-hidden">
      <div className="hero-img" ref={heroImageRef}></div>
      <div className="shutter shutter-left overflow-hidden">
        <h1 ref={heroHeadline1Ref}>Front-End</h1>
      </div>
      <div className="shutter shutter-right overflow-hidden">
        <h1 ref={heroHeadline2Ref}>Developer</h1>
      </div>
      <div className="circle-left"></div>
      <div className="circle-right"></div>
    </div>
  );
};

export default Hero;

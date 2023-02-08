import { useRef } from "react";
import { useSocialRightReveal } from "../hooks/gsap";

const data = [
  {
    id: 1,
    title: "Facebook",
    url: "https://www.facebook.com/mdbayozidbostami.badhon?mibextid=ZbWKwL",
  },
  {
    id: 2,
    title: "Twitter",
    url: "https://twitter.com/BayozidBadhon?t=MFzApQ8N8oiJkM-z6MR22w&s=07",
  },
  { id: 3, title: "GitHub", url: "https://github.com/Badhon7821" },
  {
    id: 4,
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/md-badhon-aa2700230/",
  },
];

const Socials = () => {
  const socialRef = useRef(null);

  useSocialRightReveal(socialRef);

  return (
    <div
      className="socials flex gap-5 text-sm uppercase -rotate-90 fixed left-10 top-[75%] origin-left text-white/30 bg-black/30 p-5 backdrop-blur-xl z-50"
      ref={socialRef}
    >
      {data.map((social) => (
        <a
          target="_blank"
          rel="noreferer"
          key={social.id}
          className="hover:text-cyan-400 duration-500"
          href={social.url}
        >
          {social.title}
        </a>
      ))}
    </div>
  );
};

export default Socials;

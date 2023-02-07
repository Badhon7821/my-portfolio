const data = [
  { id: 1, title: "Facebook", url: "https://www.google.com" },
  { id: 2, title: "Twitter", url: "https://www.google.com" },
  { id: 3, title: "GitHub", url: "https://www.google.com" },
  { id: 4, title: "LinkedIn", url: "https://www.google.com" },
  { id: 5, title: "Leetcode", url: "https://www.google.com" },
];

const Socials = () => {
  return (
    <div className="socials flex gap-5 text-sm uppercase -rotate-90 fixed left-10 top-[75%] origin-left text-white/30 bg-black/30 p-5 backdrop-blur-xl z-50">
      {data.map((social) => (
        <a className="hover:text-cyan-400 duration-500" href={social.url}>
          {social.title}
        </a>
      ))}
    </div>
  );
};

export default Socials;

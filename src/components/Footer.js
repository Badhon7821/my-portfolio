import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer className="text-center py-32 text-white/50 overflow-hidden">
      <p>
        &copy; {new Date().getFullYear()}
        <HashLink
          smooth
          to="#home"
          className="link-item hover:text-white duration-500"
        >
          Badhon
        </HashLink>
      </p>
      created by yours truly
    </footer>
  );
};

export default Footer;

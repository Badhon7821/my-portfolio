import { useRef } from "react";
import SectionTitle from "./SectionTitle";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef(null);

  const formSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      formRef.current,
      process.env.REACT_APP_PUBLIC_ID
    );

    e.target.querySelector(".fullname").value = "";
    e.target.querySelector(".email").value = "";
    e.target.querySelector(".message").value = "";
  };

  return (
    <div className="container mx-auto mt-40">
      <SectionTitle title={"Contact"} />
      <form
        onSubmit={formSubmit}
        ref={formRef}
        className="mt-40 grid grid-cols-2 gap-20"
      >
        <div className="from-control overflow-hidden">
          <input
            type="text"
            placeholder="Write your name"
            name="fullname"
            required
            className="fullname bg-transparent border py-8 px-28 rounded-full border-white/20 outline-none focus:border-cyan-400 duration-500 w-full"
          />
        </div>
        <div className="from-control overflow-hidden">
          <input
            type="email"
            placeholder="Write your email"
            name="email"
            required
            className="email bg-transparent border py-8 px-28 rounded-full border-white/20 outline-none focus:border-cyan-400 duration-500 w-full"
          />
        </div>
        <div className="from-control overflow-hidden">
          <textarea
            placeholder="Write your message"
            name="message"
            required
            rows="1"
            cols="30"
            className="message bg-transparent border py-8 px-28 rounded-full border-white/20 outline-none focus:border-cyan-400 duration-500 w-full resize-none overflow-hidden"
          />
        </div>
        <div className="from-control overflow-hidden">
          <input
            type="submit"
            value="Send message"
            className="uppercase border py-8 px-28 rounded-full border-white/20 hover:bg-cyan-400/20 hover:border-cyan-400/20 duration-500 w-full text-center"
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;

import React, { useState } from "react";
import "../index.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const navArray = [
    { title: "HOME", desc: "" },
    { title: "ABOUT", desc: "See about Nabin" },
    { title: "CONTACT", desc: "Contact/Information" },
  ];

  window.onscroll = function () {
    const target = document.getElementById("Nav");

    if (window.scrollY > 20) {
      target.classList.add("background-active");
      setScroll(true);
    } else {
      target.classList.remove("background-active");
      setScroll(false);
    }
  };
  return (
    <>
      {" "}
      <div className="sticky top-0" id="Nav">
        <div className={`container ${scroll ? `text-black` : `text-white`} `}>
          <div className=" flex items-center mx-auto  justify-between">
            <div />
            <div className="flex items-center gap-2">
              {navArray.map((each, index) => (
                <div
                  key={index}
                  className="  p-4 rounded font-sans font-thin capitalize  cursor-pointer"
                >
                  {each.title}
                </div>
              ))}
            </div>
            <div className="flex gap-2 items-center">
              <a target="_blank" href="https://github.com/Nabin-web">
                <FaGithub />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/feed/?trk=homepage-basic_google-one-tap-submit"
              >
                <FaLinkedin className="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <section id="home" className="section">
        <div className="flex flex-col  h-screen bg-prof gap-8 absolute top-0 left-24 justify-center text-white">
          <div className="text-6xl mt-30">Hello, I'm</div>
          <div className="font-bold text-7xl ">Nabin Kutu</div>
          <div className="uppercase text-zinc-500 tracking-tighter">
            Web Developer
          </div>
          <a
            className="w-1/3 border rounded-full p-2 hover:bg-white hover:text-black "
            href="../../public/cv.pdf"
            download
          >
            Download CV
          </a>
        </div>
      </section>
    </>
  );
};

export default Navbar;

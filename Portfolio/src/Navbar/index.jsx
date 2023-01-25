import React, { useState } from "react";
import "../index.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const navArray = [
    { label: "HOME", link: "#home" },
    { label: "ABOUT", link: "#about" },
    { label: "SKILLS", link: "#skills" },
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
      <div className="sticky top-0 z-20" id="Nav">
        <div
          className={`container mx-auto ${
            scroll ? `text-black` : `text-white`
          } `}
        >
          <div className=" flex items-center justify-center">
            {navArray.map((each, index) => (
              <div
                key={index}
                className="p-4 rounded font-sans font-thin capitalize  cursor-pointer"
                // onClick={() => each.link === "#home" && window.scrollTo(0, 0)}
                // disabled={each.label !== "HOME" && true}
              >
                {each.label}
              </div>
            ))}
            {/* <div className="flex gap-2 items-center">
              <a target="_blank" href="https://github.com/Nabin-web">
                <FaGithub />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/feed/?trk=homepage-basic_google-one-tap-submit"
              >
                <FaLinkedin className="" />
              </a>
            </div> */}
          </div>
        </div>
      </div>
      <section id="home" className="section">
        <div className="flex flex-col items-center h-screen bg-prof  gap-8 absolute top-0 w-full justify-center text-white">
          <div className="text-6xl mt-30">Hello, I'm</div>
          <div className="font-bold text-7xl ">Nabin Kutu</div>
          <div className="uppercase text-zinc-500 tracking-tighter">
            Web Developer
          </div>
          <a
            className="w-1/8 border rounded-full px-4 py-2 hover:bg-white hover:text-black "
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

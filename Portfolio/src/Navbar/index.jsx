import React, { useEffect, useState } from "react";
import "../index.css";
import { FaGithub, FaLinkedin, FaLinkedinIn } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [hasAnimated, setHasAnimated]= useState(false)
  const {ref, inView} = useInView({threshold:0})
  const navArray = [
    { label: "HOME", link: "#home", id: "home" },
    { label: "ABOUT", link: "#about", id: "about_section" },
    { label: "SKILLS", link: "#skills", id: "skill_section" },
    { label: "PROJECTS", link: "#projects", id: "projects_section" },
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

  useEffect(()=>{
    if(inView){
      setHasAnimated(true)
    }
  },[inView])
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
              <a
                key={index}
                href={`#${each.id}`}
                className="p-4 rounded font-sans capitalize  cursor-pointer"
                // onClick={() => each.link === "#home" && window.scrollTo(0, 0)}
                // disabled={each.label !== "HOME" && true}
              >
                {each.label}
              </a>
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
      <section ref={ref} id="home" className="section">
     
        <div className={` ${(hasAnimated ||inView) ? " opacity-100 ":"opacity-0"} flex flex-col items-center h-screen bg-prof  gap-8 absolute top-0 w-full justify-center text-white transition-opacity duration-1000`}>
          <div className="md:text-6xl text-3xl mt-30">Welcome, I'm</div>
          <ul className="dynamic-txts font-bold text-center">
            <li>Nabin Kutu</li>
            <li>Frontend Developer</li>
          </ul>
          <div className="flex items-center gap-2">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/nabin-kutu-72a3571a1/"
              rel="noreferrer"
              className=" border rounded-full p-2 border-white"
            >
              <FaLinkedinIn className=" hover:text-white" />
            </a>
            <a
            target="_blank"
            href="https://github.com/Nabin-web"
            rel="noreferrer"
            className=" border rounded-full p-2 border-white"
            >
              <FaGithub className=" hover:text-white" />
            </a>
          </div>
          <a
            // className="w-1/8 border rounded-full px-4 py-2 hover:bg-white hover:text-black transition duration-500"
            className="w-1/8 border rounded-full px-4 py-2 btn liquid hover:text-black"
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

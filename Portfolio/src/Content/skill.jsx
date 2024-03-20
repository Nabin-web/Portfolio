import React from "react";
import Me from "../assets/nabin.jpeg";
import Quotation from "../assets/quotation.png";
import ReactLogo from "../assets/react.png";
import JavaScript from "../assets/js.png";
import Tailwind from "../assets/tailwind.png";
import Css from "../assets/css.png";
import Html from "../assets/html.png";
import Redux from "../assets/redux.png";
import Saga from "../assets/saga.png";
import Git from "../assets/git.png";
import {
  FaAws,
  FaCss3,
  FaGit,
  FaHtml5,
  FaJira,
  FaJs,
  FaNodeJs,
  FaReact,
  FaTrello,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiReduxsaga,
  SiRedux,
  SiWebpack,
  SiGoogleanalytics,
  SiNextdotjs,
  SiChakraui,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "JavaScript", image: <FaJs />, color: "text-yellow-400" },
    { name: "React", image: <FaReact />, color: "text-blue-400" },
    { name: "Next Js", image: <SiNextdotjs />, color: "text-purple-800" },
    { name: "Tailwindcss", image: <SiTailwindcss />, color: "text-blue-600" },
    { name: "Redux", image: <SiRedux />, color: "text-indigo-500" },
    { name: "Saga", image: <SiReduxsaga />, color: "text-emerald-400" },
    { name: "Node Js", image: <FaNodeJs />, color: "text-green-300" },
    { name: "Jira", image: <FaJira />, color: "text-blue-400" },
    { name: "Trello", image: <FaTrello />, color: "text-blue-400" },
    { name: "Mantine UI", image: <FaJira />, color: "text-blue-400" },
    { name: "Chakra UI", image: <SiChakraui />, color: "text-green-300" },
    { name: "AWS", image: <FaAws />, color: "text-white" },
    {
      name: "Google Analytics",
      image: <SiGoogleanalytics />,
      color: "text-yellow-400",
    },
    { name: "Git", image: <FaGit />, color: "text-amber-500" },
  ];
  return (
    <section id="skill_section">
      <div className="text-white mb-16">
        <div className="text-center mt-36 mb-8 text-2xl font-bold">Skills</div>
        <div className="flex mx-auto pb-16">
          <div className="grid md:grid-cols-7 grid-cols-3 items-center place-items-center gap-12 mx-auto py-2 px-2 justify-center">
            {skills.map((each, index) => (
              <div className="flex flex-col items-center" key={index}>
                <div
                  className={`${each.color} hover:scale-125 duration-300 ease-in-out cursor-pointer text-7xl`}
                >
                  {each.image}
                </div>
                <div>{each.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

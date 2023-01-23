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

const Skills = () => {
  const skills = [
    { name: "JavaScript", image: JavaScript },
    { name: "React", image: ReactLogo },
    { name: "HTML", image: Html },
    { name: "CSS", image: Css },
    { name: "Tailwindcss", image: Tailwind },
    { name: "Redux", image: Redux },
    { name: "Saga", image: Saga },
    { name: "Git", image: Git },
  ];
  return (
    <div className="text-white">
      <div className="text-center mt-36 mb-8 text-2xl font-bold">Skills</div>
      <div className="flex mx-auto pb-16">
        <div className="grid grid-cols-8 items-center place-items-center gap-4 mx-auto py-2 px-2  ">
          {skills.map((each, index) => (
            <div className="flex flex-col items-center">
              <img
                src={each.image}
                alt={each.name}
                className="h-20 transform mb-2 transition duration-500 hover:scale-125"
                key={index}
              />
              <div>{each.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

import React from "react";
import Me from "../assets/nabin_bg.png";
import Triangle from "../assets/triangle.png";
import Quotation from "../assets/quotation.png";

const About = () => {
  return (
    <section id="about_section">
      <div className="text-white" style={{ marginTop: "750px" }}>
        <div className=" grid md:grid-cols-2 grid-cols-1 gap-8 items-center">
          <div className=" relative float-image">
            <img src={Me} className="absolute left-12 -top-4 p-14 lg:p-28 rounded-full z-20" />
            <img src={Triangle} className=" rotate-12 "  />
          </div>
          <div className="">
            <div>
              <div className=" text-2xl font-bold">About Me</div>
              <div>
                <img
                  src={Quotation}
                  alt="Quotation image"
                  className="h-10 mt-8 -ml-2"
                />
              </div>
              <div className="text-base font-sans font-thin tracking-widest leading-10">
                As a diligent, fast learner, and resourceful IT graduate, I am
                an excellent candidate for an IT company seeking to fill an open
                position. I possess a good problem-solving ability and can
                readily adapt to new technology. I also approach tasks with a
                sense of responsibility. I am enthusiastic about taking on
                challenges and applying my skills and knowledge to any given
                situation. Moreover, I am proficient in React development.
              </div>
            </div>
          </div>
          <div />
        </div>
      </div>
    </section>
  );
};

export default About;

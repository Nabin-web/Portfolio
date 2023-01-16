import React from "react";
import Me from "../assets/nabin.jpeg";
import Quotation from "../assets/quotation.png";

const About = () => {
  return (
    <section>
      <div className="text-white" style={{ marginTop: "750px" }}>
        <div className=" container py-8 mx-auto gap-20 flex">
          <div className="w-1/3" />
          <img src={Me} className="h-80 w-1/3" />
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
              <div className=" leading-8 text-xl font-sans font-thin">
                I am hardworking, quick learner and resourceful IT graduate
                looking for career in web development who has developed
                responsible approach to the task that I undertake or with the
                situation I am presented with. I have recently completed my
                degree in BSc(hons) in Computing from Softwarica College of IT
                and E-Commerce.
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

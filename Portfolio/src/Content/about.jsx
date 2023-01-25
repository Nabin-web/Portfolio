import React from "react";
import Me from "../assets/nabin.jpeg";
import Quotation from "../assets/quotation.png";

const About = () => {
  return (
    <section>
      <div className="text-white" style={{ marginTop: "750px" }}>
        <div className=" grid md:grid-cols-2 grid-cols-1 gap-8 items-center">
          <img src={Me} className="p-14 lg:p-28" />
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
              <div className="text-base font-sans font-thin">
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

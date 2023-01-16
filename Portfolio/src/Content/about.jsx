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
                Originally from Latin, Lorem ipsum has no intelligible meaning.
                It is simply a display of letters to be viewed as a sample with
                given graphical elements in a file. "Lipsum" (a portmanteau of
                lorem and ipsum) generators are commonly used to form generic
                text in a file
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

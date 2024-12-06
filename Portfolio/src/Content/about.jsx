import React from "react";
import Me from "../assets/nabin_bg.png";
import Triangle from "../assets/triangle.png";
import Quotation from "../assets/quotation.png";
import {useInView} from 'react-intersection-observer'

function WindowControls() {
  return (
    <div className="flex gap-1.5">
      <div className="w-3 h-3 rounded-full bg-red-500" />
      <div className="w-3 h-3 rounded-full bg-yellow-500" />
      <div className="w-3 h-3 rounded-full bg-green-500" />
    </div>
  );
}

const About = () => {
  const {ref, inView, entry} = useInView({
    threshold: 0.5,
  })

  console.log({inView, entry})
  return (
    <section ref={ref}  id="about_section">
      <div className="text-white" style={{ marginTop: "750px" }}>
        <div className={` grid md:grid-cols-2 grid-cols-1 gap-8 items-center  `}>
          <div className={`${inView ? " opacity-100 ":"opacity-0 -translate-x-60"} relative float-image transition-opacity duration-500 ease-out`}>
            <img src={Me} className="absolute md:left-12 left-6 -top-4 p-14 lg:p-28 rounded-full z-20" />
            <img src={Triangle} className=" rotate-12 "  />
          </div>
       
            <div className={`${inView ? " opacity-100":"opacity-0 translate-x-60"} transition-all duration-500 md:p-0 px-4`}>
              <div className=" text-2xl font-bold">About Me</div>
              <div>
                <img
                  src={Quotation}
                  alt="Quotation image"
                  className="h-10 mt-8 -ml-2"
                />
              </div>
               <div className="min-h-screenp-8 font-mono">
                <div className="max-w-3xl mx-auto">
                  <div className="bg-[#1E1E1E] rounded-lg overflow-hidden border-2" style={{
                    boxShadow: "rgb(0, 0, 51) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
                  }}>
                    <div className="px-4 py-2 bg-[#2D2D2D] flex justify-between items-center">
                      <span className="text-gray-400 text-sm">about-me.txt</span>
                      <WindowControls />
                    </div>
                    <div className="p-6 space-y-2 text-gray-300">
                      <div>
                        <span className="text-gray-500">01</span>{" "}
                        Hi! I'm <span className="text-green-400">Nabin Kutu</span>, a{" "}
                        <span className="text-blue-400">Software Engineer</span> at Rara Digital Labs (Recent).
                      </div>
                      <div>
                        <span className="text-gray-500">02</span> With{" "}
                        <span className="text-yellow-400">More than 2+ years</span> of experience in building{" "}
                        <span className="text-purple-400">scalable applications</span>
                      </div>
                      <div>
                        <span className="text-gray-500">03</span> Specializing in{" "}
                        <span className="text-pink-400">full-stack development</span>
                      </div>
                      <div>
                        <span className="text-gray-500">04</span> Passionate about{" "}
                        <span className="text-green-400">clean code</span> and{" "}
                        <span className="text-blue-400">optimal solutions</span>
                      </div>
                      
                      <div>
                        <span className="text-gray-500">05</span> Strong analytical skills {" "}
                        <span className="text-purple-400">and ability to find efficient solutions</span>
                      </div>
                      <div>
                        <span className="text-gray-500">06</span> End-to-end{" "}
                        <span className="text-pink-400"> development capabilities</span>
                      </div>
                      <div>
                        <span className="text-gray-500">07</span> Enthusiastic about {" "}
                        <span className="text-yellow-400">taking on
                        challenges and applying my skills to any given
                        situation</span>
                      </div>
                    </div>
                  </div>
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

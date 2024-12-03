import React from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="pb-20 mt-20 flex justify-between items-center lg:px-4 px-8 flex-col md:flex-row text-white">
      <div className=" text-center md:text-left">
        Copyright &#169; 2022 All rights reserved. Made with{" "}
        <span className="text-red-500 text-2xl">&#9829;</span> by Nabin Kutu.
      </div>
      <div className="flex items-center gap-4 text-2xl pt-8 lg:pt-0">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/nabin-kutu-72a3571a1/"
          rel="noreferrer"
          className="rounded bg-white hover:bg-zinc-800 transition duration-500 p-3"
        >
          <FaLinkedinIn className="text-black hover:text-white" />
        </a>
        <a
          target="_blank"
          href="https://github.com/Nabin-web"
          rel="noreferrer"
          className="rounded bg-white hover:bg-zinc-800 transition duration-500 p-3"
        >
          <FaGithub className="text-black hover:text-white" />
        </a>
      </div>
    </div>
  );
};

export default Footer;

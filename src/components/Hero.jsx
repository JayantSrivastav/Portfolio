import React from "react";
import hero from "../assets/Hero.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import reactLogo from "../assets/React.png";
import reduxLogo from "../assets/Redux.png";
import tailwind from "../assets/Tailwind Css.png";
import githubRed from "../assets/githubRed.png";

const Hero = () => {
  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center lg:h-[90vh] justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-0 lg:mt-0 mt-10">
            <h1 className="lg:text-7xl text-4xl font-bold lg:leading-snug">
              Hi There, <br />
              I'm Jayant <span className="text-red-500">Srivastava</span>
            </h1>
            <p className="md:text-2xl text-xl mb-4">
              Web, Mobile Developer & Designer
            </p>
            <p className="mb-4">
              I'm a passionate web developer with expertise in React, React
              Native, and modern web technologies. I love creating beautiful and
              functional website & apps that solve real world problems.
            </p>
            <button className="bg-black text-white px-3 py-2 w-max rounded-md">
              <a
                href="https://drive.google.com/file/d/1PTTpGLbuX8ymWuPYmsD5CN81SyWIur7B/view?usp=drive_link"
                download
                target="_blank"
              >
                Download CV
              </a>
            </button>
          </div>
          <div className="md:w-1/2 relative flex justify-center items-end">
            <img src={hero} alt="" className="lg:h-[90vh] h-96" />
            <img
              src={reactLogo}
              alt=""
              className="absolute w-10 top-36 left-0 rounded-full md:hidden"
            />
            <img
              src={reduxLogo}
              alt=""
              className="absolute w-10 top-0 right-5 md:hidden"
            />
            <img
              src={tailwind}
              alt=""
              className="absolute w-10 rounded-full right-0 bottom-36 md:hidden"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-40 right-10 hidden bg-gray-200 p-4 md:flex flex-col gap-6 rounded-full">
        {/* <img src={facebook} alt="" className='w-20'/> */}
        <a
          href="https://github.com/JayantSrivastav"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubRed} alt="GitHub" className="w-20" />
        </a>

        <a
          href="https://www.linkedin.com/in/jayant-srivastava-4a887a227/"
          target="_blank"
          rel="noopener noreferrer"
        >
        <img src={linkedin} alt="GitHub" className="w-20" />
        
          <a
            href="https://x.com/jayantsrivas1?s=21"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
          <img src={twitter} alt="" className="w-20" />
        </a>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import Portfolio from "../assets/portfolio.png";
import Cards from "./Cards";
import Admin from "../assets/admindashboard.png";
import CodeCollab from "../assets/codecollab.png";
import DoneWithIt from "../assets/donewithitApp.png";
import ECommerce from "../assets/ecommerceApp.png";
import MetaGames from "../assets/metagames.png";

const Projects = () => {
  const projectJson = [
    {
      title: "Portfolio",
      desc: "A portfolio project is a showcase of your skills, creativity, and expertise, demonstrating your ability to solve real-world problems through well-designed and functional projects.",
      image: Portfolio,
      live: "https://jayantsrivastava-portfolio.vercel.app/",
      github: "https://github.com/JayantSrivastav/Portfolio",
    },
    {
      title: "Code Coolab",
      desc: "An online Real-time code editor with collaboration feature.",
      image: CodeCollab,
      live: "https://code-collab-jtrj.onrender.com/",
      github: "https://github.com/JayantSrivastav/code-collab",
    },
    {
      title: "DoneWithIt",
      desc: " React Native Marketplace Application built with Expo CLI and Server build with NodeJs and MySQL.",
      image: DoneWithIt,
      live: "Live",
      github: "GitHub",
    },
    {
      title: "E Commerce App",
      desc: "A cutting-edge Ecommerce mobile app build using React Native",
      image: ECommerce,
      live: "Live",
      github: "Github",
    },
    {
      title: "Meta Games",
      desc: "Build a visually captivating website, featuring scroll-triggered animations, geometric transitions, and engaging video storytelling",
      image: MetaGames,
      live: "https://meta-gamejayant.vercel.app/",
      github: "https://github.com/JayantSrivastav/meta-game",
    },
    {
      title: "Admin Dashboard",
      desc: "A admin dashboard which has high functionality including charts and graphs.",
      image: Admin,
      live: "https://react-tailwind-dashboard-delta.vercel.app/",
      github: "https://github.com/JayantSrivastav/react-admin",
    },
  ];

  return (
    <section id="projects" className="relative bg-gray-700 py-10 px-4">
      <div className="mb-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-white border-b border-red-500 w-max pb-4">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10">
          {projectJson.map((items) => {
            return <Cards item={items} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;

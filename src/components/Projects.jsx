import React from "react";
import Pvs from "../assets/Pvs.png";
import Sontpic from '../assets/Sontpic.png';
import CL from '../assets/CommutersLink.jpg';
import drap from '../assets/Drap.png';
import pos from '../assets/POS.png';
import yedpay from '../assets/Yedpay.png';
const ProjectCard = ({ image, title, description, link }) => {
  return (
    <article className="relative max-w-sm bg-gray-800 rounded overflow-hidden shadow-lg group">
      <div className="absolute z-0 w-40 h-40 sm:w-60 sm:h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 -top-5 left-10"></div>
      <div className="relative z-10">
        <figure className="relative">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute h-[202px] inset-0 flex items-center justify-center bg-purple-800 bg-opacity-50 opacity-0
                group-hover:opacity-100 transition-opacity duration-300"
          >
            <button className="bg-white font-medium text-black py-2 px-4 rounded-3xl shadow hover:text-white hover:bg-[#2879d5] cursor-pointer">
              Live Preview
            </button>
          </a>
        </figure>
        <div className="px-6 py-4">
          <header>
            <h3 className="text-white font-bold text-xl mb-2">{title}</h3>
          </header>
          <p className="text-gray-200 text-base">{description}</p>
        </div>
      </div>
    </article>
  );
};

const listProjects = [
  {
    image: Pvs,
    title: "PVSIS",
    description:
      "The PVS Pathway is designed to empower national Veterinary Services by providing a comprehensive assessment of their strengths, weakness, and opportunities for improvements and this project is owned by WOAH.",
    link: "https://www.woah.org/en/home/",
  },
  {
    image: Sontpic,
    title: "SONT",
    description:
      "This project is also owned by WOAH. In this project we have developed an online tool in which animal disease content is available at online platform in which user can search, upload, format document, switch languages in English, French and Spanish and download in pdf form.",
    link: "https://www.woah.org/en/home/",
  },
  {
    image: CL,
    title: "Commuters Link",
    description:
      "This website is designed for share commute with passengers during the travelling and make a partner on daily basis or weekly basis.",
    link: "https://commuterslink.com/",
  },
  {
    image: drap,
    title: "DRAP",
    description:
      "I worked on the Drug Regulatory Authority Pakistan,Managing the license workflow and Develop a Track & Trace Module. In the project we have all data of pharmacy in Pakistan on the region base and have record through track and trace system of medicine for pharmaceutical company to pharmacy.",
    link: "http://drap.sysreformsint.com/",
  },
  {
    image: pos ,
    title: "POS",
    description:
      "Point of Sale is for restaurant and this is local deployment and this is developed with React.js, tailwind.css and Node.js",
    link: "",
  },
   {
    image: yedpay,
    title: "Payment System",
    description:
      "In this project we have developed a payment system in which user can pay amount, have record of all transactions, check total sales and have a platform to refund the amount.In this Project we have used Next.js, tailwind.css",
    link: "",
  },
];
const Projects = () => {
  return (
    <main className="p-4" id="projects">
      <section data-aos="fade-up" data-aos-delay="300">
        <header className="text-center">
          <h1 className="text-3xl text-white sm:text-4xl font-bold mb-6">
            My <span className="text-purple-400">Projects</span>
          </h1>
          <p className="text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base">
            These all projects all my contribution and I have learned a lot from these projects.
          </p>
        </header>
      </section>
      <section
        data-aos="fade-up"
        data-aos-delay="500"
        className="flex flex-wrap gap-4 justify-center mt-6 "
      >
        {listProjects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </section>
    </main>
  );
};

export default Projects;

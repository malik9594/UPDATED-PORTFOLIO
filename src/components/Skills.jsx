import React from "react";
import re from "../assets/react.svg";
import tailwind from "../assets/tailwind.svg";
import nextjs from "../assets/nextjs.svg";
import bootstrap from "../assets/bootstrap.svg";
import mui from "../assets/mui.svg";
import rimg from "../assets/AI-right.jpg";
import limg from "../assets/AI-left avater.jpg";
import aiAvatar from "../assets/AI-avatar.avif";
import aceternity from "../assets/Aceternity.avif";
import chakra from "../assets/chakra.png";
import node from "../assets/Node.png";
import express from '../assets/expressjs.png';
import mongodb from '../assets/MongoDB.png';
import mysql from '../assets/mysql.png';
import { motion } from "framer-motion";
const skillsData = [
  {
    id: 1,
    image: re,
    title: "React js",
    description:
      "React.js is a popular JavaScript library used for building dynamic and responsive user interfaces. It enables efficient component-based development and is ideal for single-page applications.",
  },
  {
    id: 2,
    image: tailwind,
    title: "Tailwind CSS",
    description:
      "Tailwind CSS is a utility-first CSS framework that enables rapid UI development. It provides low-level utility classes that let you build custom designs without writing traditional CSS, making development faster and more maintainable",
  },
  {
    id: 3,
    image: nextjs,
    title: "Next js",
    description:
      "Next.js is a React-based framework that enables server-side rendering, static site generation, and seamless routing. It’s optimized for performance and SEO, making it ideal for building scalable, production-ready web applications.",
  },
  {
    id: 4,
    image: bootstrap,
    title: "Bootstrap",
    description:
      "Bootstrap is a popular front-end framework for building responsive and mobile-first websites quickly. It offers a wide range of pre-designed components and a powerful grid system to streamline UI development.",
  },
  {
    id: 5,
    image: mui,
    title: "Material UI",
    description:
      "MUI is a comprehensive React UI framework that implements Google’s Material Design. It provides a wide range of customizable components and tools to build modern, accessible, and responsive web applications efficiently.",
  },
  {
    id: 6,
    image: aceternity,
    title: "Aceternity UI",
    description:
      "Aceternity UI is a modern component library focused on sleek animations and smooth user interactions. Built with Tailwind CSS and Framer Motion, it offers visually appealing, responsive UI elements perfect for enhancing user experience in modern web apps.",
  },
  {
    id: 7,
    image: chakra,
    title: "Chakra UI",
    description:
      "Chakra UI is a simple, modular, and accessible component library for React applications. It enables developers to build responsive and themeable interfaces quickly using a style props-based approach and built-in accessibility features.",
  },
   {
    id: 8,
    image: node,
    title: "Node js",
    description:
      "Node.js is a powerful JavaScript runtime built on Chrome's V8 engine. It enables server-side development with JavaScript, allowing you to build fast, scalable, and efficient backend applications and APIs using a non-blocking, event-driven architecture.",
  },
  {
    id:9,
    image: express,
    title: "Express js",
    description:
    "Express.js is a fast, minimal, and flexible Node.js web application framework. It simplifies building robust APIs and web servers by providing powerful routing, middleware support, and a wide range of HTTP utilities.",
  },
   {
    id:10,
    image: mongodb,
    title: "MongoDB",
    description:
    "MongoDB is a flexible, document-oriented NoSQL database designed for scalability and high performance. It stores data in JSON-like documents, making it easy to work with complex data structures and build modern, data-driven applications.",
  },
    {
    id:11,
    image: mysql,
    title: "MySQL",
    description:
    "MySQL is a widely used open-source relational database management system. It is known for its reliability, speed, and ease of use, making it ideal for storing and managing structured data in web applications and enterprise solutions.",
  }
];

const SkillBox = ({ image, title, description }) => (
  <motion.article
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{
      scale: 1.08,
      boxShadow: "0 8px 40px 0 #a21caf55",
      transition: { duration: 0.3 },
    }}
    transition={{ duration: 0.5, type: "spring" }}
    viewport={{ once: true }}
    className="relative bg-white/10 backdrop-blur-md p-5 sm:p-7 rounded-3xl shadow-2xl text-center overflow-hidden group cursor-pointer border border-purple-400/30"
  >
    {/* Animated Glow */}
    <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-purple-500 via-pink-400 to-blue-400 opacity-0 group-hover:opacity-30 blur-2xl transition duration-500 pointer-events-none"></div>
    <figure className="flex justify-center mb-4">
      <motion.img
        src={image}
        alt={title}
        className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-lg"
        whileHover={{ rotate: 12, scale: 1.15 }}
        transition={{ type: "spring", stiffness: 300 }}
      />
    </figure>
    <header>
      <h3 className="text-lg sm:text-xl font-bold mb-2 text-purple-300 group-hover:text-white transition">
        {title}
      </h3>
    </header>
    <p className="text-gray-300 text-sm sm:text-base text-justify group-hover:text-gray-100 transition">
      {description}
    </p>
  </motion.article>
);
const Skills = () => {
  return (
    <div id="skills">
      <section className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center text-white px-4 py-10">
        <div
          className="absolute z-0 w-72 h-36 sm:w-96 sm:h-44 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 top-10 sm:top-28 left-1/2
         transform -translate-x-1/2"
        ></div>
        <img
          src={aiAvatar}
          alt="Left Picture"
          className="absolute z-10 left-2 top-2 sm:left-16 sm:top-32 transform -rotate-12 w-24 h-auto sm-w-32 opacity-70"
        />
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="relative z-20 text-center space-y-6 sm:space-y-10"
        >
          <header>
            <h1 className="text-3xl sm:text-4xl font-bold">
              My Experience <br /> and{" "}
              <span className="text-purple-400">Skills</span>
            </h1>
            <p className="text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base">
              I have some skills which are mentioned below.
            </p>
          </header>
          <section
            data-aos="fade-up"
            data-aos-delays="500"
            style={{ paddingTop: "3rem" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            {skillsData.map((skill) => (
              <SkillBox
                key={skill.id}
                image={skill.image}
                title={skill.title}
                description={skill.description}
              />
            ))}
          </section>
        </div>
        <img
          src={rimg}
          alt="Right picture"
          className="absolute z-10 right-2 top-2 sm:right-16 sm:top-32 transform
      rotate-12 w-24 h-auto sm:w-32 opacity-70"
        />
      </section>
    </div>
  );
};

export default Skills;

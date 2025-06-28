import React from "react";
import Navbar from "./Navbar";
import facebook from "../assets/facebook.png";
import github from "../assets/github.jpg";
import indeed from "../assets/indeed.png";
import linkedin from "../assets/linkedin.png";
import profile from "../assets/hassan-img.jpeg";
import downloadCv from "../assets/hassan-cv.pdf";
import heroImage from "../assets/hero-image.png";
import { FaFacebook, FaGithub, FaLinkedin, FaLinkedinIn } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";
const Hero = () => {
  return (
    <>
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[600px] flex flex-col items-center">
      <div
        className="md:h-[550px] h-[500px] w-[450px] bg-gradient-to-r absolute from-[#6d2897] via-[#8e6cf5] to-[#bb61c5] transform rotate-45
      z-0 right-2 top-28 rounded-3xl"
      >
          <figure data-aos="fade-up" data-aos-delay="500" class="flex-1 flex justify-center md:justify-end mt-0 aos-init aos-animate">
        <img src={heroImage} alt="hero image" class="h-[350px] sm:h-[170px] md:h-[450px] w-[280px] sm:w-[480px] object-cover transform  relative"/>
    </figure>
      </div>
      
      <main
        id="home"
        className="flex flex-col md:flex-row items-center justify-center
      w-full px-4 md:px-52 pb-4 md:pb-24 md:pt-32 pt-24 md:mt-0 z-10"
      >
        <section
          className="flex-1 mr-28 md:text-left mt-10 md:mt-0 relative"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div className="absolute -z-10 w-60 h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 -top-5 -left-12">
        
          </div>
          <header>
              <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold text-white mb-4" style={{paddingLeft:'1rem'}}>
                Hassan Malik
              </h1>
              <h2 className="text-xl sm:text-4xl md:text-2xl font-bold text-[#3e0f4a] md:text-[#c744ec] mb-2" style={{paddingLeft:'1rem'}}>
                Frontend Developer
              </h2>
            </header>
          <p className="text-base sm:text-lg md:text-lg text-gray-200 mb-6" style={{paddingLeft:'1rem'}}>
            Specialize in frontend development with a strong focus on React, JavaScript and modern styling 
            tools like Tailwind CSS, Material UI, Bootstrap, Aceternity UI and Chakra!
          </p>
          <div className="flex items-center space-x-4 mb-6" style={{paddingLeft:'1rem'}}>
            <a href="https://github.com/malik9594SysReforms" target="_blank">
              {/* <img src={github}  alt="Linkedin" className="w-11 h-11 mix-blend-overlay" /> */}
              <FaGithub className="w-11 h-11 text-white"/>            </a>
            <a href="https://www.linkedin.com/in/hassan-raza-a83950219/" target="_blank">
              {/* <img src={linkedin} alt="Linkedin" className="w-11 h-11" /> */}
              <FaLinkedin className="w-11 h-11 text-white" />
            </a>
            <a href="https://www.facebook.com/hassan.raza.379053" target="_blank">
              {/* <img src={facebook} alt="Linkedin" className="w-11 h-11" /> */}
              <FaFacebook className="w-11 h-11 text-white" />
            </a>
            <a href="https://profile.indeed.com/?hl=en_PK&co=PK&from=gnav-homepage" target="_blank">
              <SiIndeed className="w-11 h-11 text-white" />
            </a>
          </div>
          <a href={downloadCv} download style={{paddingLeft:'1rem'}}>
            <button
              className=" inline-flex text-white border-2 py-2 px-6 focus:outline-none hover:bg-[#801b9c]
                    hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] rounded-full text-lg cursor-pointer"
            >
              Download CV
            </button>
          </a>
        </section>
        <figure
          data-aos="fade-up"
          data-aos-delay="500"
          className="flex-1 flex justify-center md:justify-end mt-0"
        >
          {/* <img
            src={profile}
            alt="hero image"
            className="h-[250px] sm:h-[350px] md:h-[350px] w-[180px] sm:w-[480px]  object-cover"
          /> */}
        </figure>
      </main>
    </div></>
    
  );
};

export default Hero;

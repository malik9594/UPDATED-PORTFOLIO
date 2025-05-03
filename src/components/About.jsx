import React from "react";
import aboutpic1 from '../assets/about-1.png'
import aboutpic2 from '../assets/about-img-center.jpg';
import aboutpic3 from '../assets/about-img.png';

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen overflow-hidden flex items-center justify-center text-white px-4 sm:px-6"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        <figure
          data-aos="fade-right"
          data-aos-delay="500"
          className="flex flex-wrap justify-center gap-4 relative"
        >
          <div 
        //   className="h-[200px] sm:h-[300px] w-[300px] sm:w-[400px] lg:h-[300px] lg:w-[500px] bg-gradient-to-1 from-[#6d2897] via-[#6c95f5] to-[#bb61c5] absolute transform rotate-12 z-0 right-5 -top-2 md:top-10 rounded-full"
         className="rotate-12"
         >
            <img
              src={aboutpic1}
              alt="about picture 1"
              className="absolute -top-2 left-5 sm:left-10 transform -translate-y-12 z-20 w-24 h-24 sm:w-32 sm:h-32 rounded-3xl shadow-lg"
            />
            <img
              src={aboutpic2}
              alt="about picture 2"
              className="realtive z-10 w-35 h-44 s:w-40 sm-h-40 md:w-80 md:h-96 rounded-lg shadow-lg"
            // className="relative z-10 sm:top-30 h-44 rounded-full shadow-lg"
            />
            <img
              src={aboutpic3}
              alt="about picture 3"
              className="absolute bottom-0 right-5 sm:right-10 transform translate-y-12 z-10 h-20 sm:w-32 sm-h-32 rounded-3xl shadow-lg"
            />
          </div>
        </figure>
        <article
          data-aos="fade-left"
          data-aos-delay="500"
          className="text-center lg-text-left relative"
        >
          <div className="absolute z-0 w040 h-40 sm:w-60 sm:h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 -top-5 left-10"></div>
          <header>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              About me
            </h1>
          </header>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quos
            expedita a consequatur. Facilis ipsa, corporis similique autem
            consequatur iure saepe minus qui repudiandae pariatur dignissimos
            non exercitationem, perspiciatis reprehenderit. Lorem ipsum dolor,
            sit amet consectetur adipisicing elit. Fugiat, ab maiores sapiente
            cupiditate iste saepe temporibus commodi, natus accusantium quis ex
            nesciunt voluptate. Odit laudantium temporibus nisi error reiciendis
            vitae?
          </p>
          <footer>
            <button className="inline-flex text-white border-2 py-2 px-4 sm:px-6 focus:outline-none hover:bg-[#801b9c] hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] rounded-full text-sm sm:text-lg">
                Learn More!!
            </button>
          </footer>
        </article>
      </div>
    </section>
  );
};

export default About;

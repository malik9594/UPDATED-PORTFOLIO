import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "../assets/Logo.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScrollTop) {
        // Scrolling down, hide navbar
        setIsVisible(false);
      } else {
        // Scrolling up, show navbar
        setIsVisible(true);
      }

      setLastScrollTop(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, [lastScrollTop]);
  const NavbarLinks = [
    { id: 1, name: "Home", link: "#home" },
    { id: 2, name: "About", link: "#about" },
    { id: 3, name: "Skills", link: "#skills" },
    { id: 4, name: "Projects", link: "#projects" },
    { id: 5, name: "Contact", link: "#contact" },
    {id: 6,name:"Votter", link: "#votter"},
  ];
  return (
     <header
    className={`fixed top-0 left-0 w-full z-30 border-b border-transparent text-white transition-transform duration-500 ${
      isVisible ? "translate-y-0" : "-translate-y-full"
    } bg-white/10 backdrop-blur-md shadow-lg`}
    data-aos="fade-up"
    data-aos-delay="300"
  >
    <div className="container flex mx-auto items-center justify-between p-2">
      {/* LOGO */}
      <a href="#home" className="flex items-center gap-2 text-4xl font-bold italic text-white drop-shadow-lg">
        <img src={Logo} className="w-[60px] h-[60px] rounded-full shadow-lg border-2 border-purple-400" />
        <span className="hidden sm:inline text-purple-300">Portfolio</span>
      </a>
      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden focus:outline-none"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <FiMenu className="w-8 h-8 text-purple-200 hover:text-purple-400 transition" />
      </button>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-7">
        {NavbarLinks.map((link) => (
          <a
            href={link.link}
            key={link.id}
            className="hover:text-purple-400 text-lg transition font-semibold px-2 py-1 rounded-lg hover:bg-white/10"
          >
            {link.name}
          </a>
        ))}
        <a
          href="#contact"
          className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 py-2 px-6 focus:outline-none hover:from-pink-500 hover:to-purple-500 shadow-lg rounded-full text-lg cursor-pointer transition"
        >
          Contact
        </a>
      </nav>
    </div>
    {/* Mobile Navigation */}
    <div
      className={`${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      } md:hidden bg-[#801b9c]/95 backdrop-blur-lg absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center space-y-8 pt-16 transition-opacity duration-500`}
    >
      {/* Close Button */}
      <button
        className="absolute top-5 right-5 text-white"
        onClick={() => {
          setIsOpen(false);
        }}
      >
        <FiX className="w-8 h-8" />
      </button>
      {/* Mobile Navigation Links */}
      {NavbarLinks.map((link) => (
        <a
          href={link.link}
          key={link.id}
          className="text-lg text-white hover:text-purple-300 font-semibold transition"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          {link.name}
        </a>
      ))}
      {/* Contact button */}
      <a
        href="#contact"
        className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 py-2 px-6 focus:outline-none hover:from-pink-500 hover:to-purple-500 shadow-lg rounded-full text-lg cursor-pointer transition"
        onClick={() => setIsOpen(false)}
      >
        Contact
      </a>
    </div>
  </header>
  );
};

export default Navbar;

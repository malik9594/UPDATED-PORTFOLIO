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
  ];
  return (
    <header
      className={`fixed top-0 left-0 w-full z-20 border-b border-r-0 border-l-0  text-white transition-transform duration-500 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <div className="container flex mx-auto items-center justify-between p-2">
        {/* LOGO */}
        <a href="#home" className="text-4xl font-bold italic text-white">
          <img src={Logo} className="w-[60px] h-[60px]" />
        </a>
        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <FiMenu className="w-8 h-8 text-white" />
        </button>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-7">
          {NavbarLinks.map((link) => (
            <a
              href={link.link}
              key={link.id}
              className="hover:text-gray-200 text-lg"
            >
              {link.name}
            </a>
          ))}
          <a  href="//api.whatsapp.com/send?phone=923349594377&text=WHATEVER_LINK_OR_TEXT_YOU_WANT_TO_SEND" target="_blank"  className="inline-flex text-white border-2 py-2 px-6 focus:outline-none hover:bg-purple-800 rounded-full text-lg cursor-pointer">
            Contact
          </a>
        </nav>
      </div>
      {/* Mobile Navigation */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden bg-[#801b9c] absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center space-y-8 pt-16`}
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
            className="text-lg text-white hover:text-gray-300"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            {link.name}
          </a>
        ))}
        {/* Contact button */}
        <a  href="//api.whatsapp.com/send?phone=923349594377&text=WHATEVER_LINK_OR_TEXT_YOU_WANT_TO_SEND" target="_blank"  className="inline-flex text-white border-2 py-2 px-6 focus:outline-none hover:bg-purple-800 rounded-full text-lg cursor-pointer">
            Contact
          </a>
      </div>
    </header>
  );
};

export default Navbar;

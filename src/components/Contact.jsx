import React, { useState } from "react";
import aiAvatar from "../assets/AI-avatar.avif";
import limg from "../assets/AI-left avater.jpg";
import emailjs from "emailjs-com";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [phone, setPhone] = useState("");

       const handleSubmit  = () => {
   
       const templateParams = {
         from_name: name,
         user_email: email,
         phone_number: phone,
         message: message,
         to_email: "hassanrazamalik512@gmail.com"
       };
       console.log("Template Params:", templateParams);
       emailjs
         .send(
           "service_zwv3eln", // Replace with your EmailJS Service ID
           "template_8encwr5", // Replace with your EmailJS Template ID
           templateParams,
           "oUCWzxACRZZLpm5ok" // Replace with your EmailJS Public Key
         )
         .then(
           (response) => {
             console.log("Email sent successfully!", response.status, response.text);
           },
           (error) => {
             console.error("Failed to send email:", error);
           }
         );
   
       // Clear form inputs after submission
       setName("");
       setEmail("");
       setPhone("");
       setMessage("");
     };
  return (
    <section
      data-aos="fade-up"
      data-aos-delay="300"
      id="contact"
      className="min-h-screen overflow-hidden justify-center flex items-center p-6 mt-10 relative"
    >
      <article className="shadow-lg rounded-lg flex flex-col md:flex-row max-w-4xl w-full relative">
        <aside className="w-full md:w-1/2 relative">
          <div
            className="absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w=[400px] h-[300px] sm:h-[400px] rounded-full bg-gradient-to-r from-[#6d2897f]
            via-[#8e6cf5] to-[#bb61c5] shadow-[0_0_70px_rgba(182,0,182,0.7)]"
          ></div>
          <img
            src={aiAvatar}
            alt="Contact illustration"
            className="h-[250px] sm:h-[400px] md:h-[485px] w-[300px] sm:w-[480px] object-cover rounded-t-lg md:rounded-r-lg relative"
          />
        </aside>
        <section className="p-8 w-full md:w-1/2">
          <header className="mb-6">
            <h2 className="text-4xl font-bold text-center text-white">
              Contact Us
            </h2>
          </header>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-300 font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 text-white bg-gray-400 rounded-lg focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-300 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="w-full px-4 py-2 text-white bg-gray-400 rounded-lg focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-300 font-medium mb-2"
              >
                Phone Number
              </label>
              <input
                type="number"
                name="phone"
                id="email"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter Your Phone Number"
                className="w-full px-4 py-2 text-white bg-gray-400 rounded-lg focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="Message"
                className="block text-gray-300 font-medium mb-2"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-2 text-white bg-gray-900 rounded-lg focus:outline-none"
              ></textarea>
            </div>
            <button
            type="button" 
            onClick={handleSubmit}
            className="text-white w-full border-2 py-2 px-6 cursor-pointer rounded-full"
            //  className="w-full text-white border-2 py-2 px-6 focus:outline-none hover:bg-[#801b9c] hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] rounded-full text-lg"
             >
              Send Message
            </button>
          </form>
        </section>
      </article>
    </section>
  );
};

export default Contact;

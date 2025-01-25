import React, { useState } from "react";
import githubRed from "../assets/githubRed.png";
import linkedin from "../assets/linkedin.png";
import Lottie from "lottie-react";
import contact from "../assets/Contact.json";
import twitter from "../assets/twitter.png";

const Contact = () => {
  const [isMessageSent, setIsMessageSent] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "5d95d733-6155-4bd4-8ac7-eba3fe063e78");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setIsMessageSent(true);

      // Hide the popup after a few seconds
      setTimeout(() => setIsMessageSent(false), 3000);
    }
  };

  return (
    <section id="contact" className="z-50 bg-gray-800 relative py-10 px-5 md:px-0">
      <div className="mb-16 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2 mb-8 ml-2 md:mb-0">
            <h2 className="text-3xl font-bold mb-3 text-red-500">Get in Touch</h2>
            <p className="mb-4 text-white/85">
              I'm always open to new opportunities and collaboration. Feel free to reach out!
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/JayantSrivastav" className="text-foreground/60 hover:text-foreground/80">
                <img src={githubRed} alt="" className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/jayant-srivastava-4a887a227/" className="text-foreground/60 hover:text-foreground/80">
                <img src={linkedin} alt="" className="h-6 w-6" />
              </a>
              <a href="https://x.com/jayantsrivas1?s=21" className="text-foreground/60 hover:text-foreground/80">
                <img src={twitter} alt="" className="h-6 w-6" />
              </a>
            </div>
            <Lottie animationData={contact} className="w-[350px] mx-auto lg:w-[500px]" />
          </div>
          <form onSubmit={onSubmit} className="w-full md:w-1/2 bg-gray-100 rounded-lg border border-red-300 shadow-lg shadow-red-500 p-10">
            <h1 className="text-gray-900 text-4xl font-bold mb-7">Contact Me</h1>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Full Name"
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                name="name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                name="email"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                placeholder="Enter Your Message"
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                name="message"
              />
            </div>
            <button type="submit" className="bg-red-500 text-white px-3 py-2 rounded-lg">Send Message</button>
          </form>
        </div>
      </div>

      {/* Popup Message */}
      {isMessageSent && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-5 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold text-red-600">Message Sent!</h2>
            <p className="mt-2 text-gray-600">Your message has been successfully sent.</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;

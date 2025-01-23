import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 py-8">
      {/* Bandage Section */}
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 border-b pb-6">
        {/* Bandage Heading */}
        <h2 className="text-2xl font-bold">Bandage</h2> {/* Increased size */}
        
        {/* Social Media Icons */}
        <div className="flex space-x-6 text-sky-500 text-lg"> {/* Increased icon size */}
          <a
            href="#"
            aria-label="Facebook"
            className="hover:text-sky-600 transition-colors duration-300"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="hover:text-sky-600 transition-colors duration-300"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="hover:text-sky-600 transition-colors duration-300"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>

      {/* Footer Links */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 px-4 py-8">
        {[
          { title: "Company Info", links: ["About Us", "Carrier", "We are hiring", "Blog"] },
          { title: "Legal", links: ["Terms of Service", "Privacy Policy", "Legal Info", "Blog"] },
          { title: "Features", links: ["Business Marketing", "User Analytic", "Live Chat", "Unlimited Support"] },
          { title: "Resources", links: ["iOS & Android", "Watch a Demo", "Customers", "API"] },
        ].map((section, index) => (
          <div key={index}>
            <h3 className="font-semibold mb-3">{section.title}</h3>
            <ul className="space-y-2 text-sm">
              {section.links.map((link, i) => (
                <li
                  key={i}
                  className="hover:text-sky-500 hover:underline cursor-pointer transition-all duration-300"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Subscription Form */}
        <div>
          <h3 className="font-semibold mb-3">Get In Touch</h3>
          <form className="space-y-3">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all duration-300"
            />
            <button className="w-full p-2 bg-sky-500 text-white rounded-md hover:bg-sky-600 transition-all duration-300">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 text-sm font-bold text-gray-500 mt-6">
        Made With Love By Nisar Noorani - All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { FaInstagram, FaFacebook, FaYoutube, FaTwitter, FaPhone, FaEnvelope } from 'react-icons/fa';

const TopBanner = () => {
  return (
    <div className="bg-gray-900 text-white py-2 justify-between items-center px-4 text-sm hidden md:flex">
      {/* Left Section: Contact Info */}
      <div className="flex items-center gap-4">
        {/* Phone Icon with Number */}
        <div className="flex items-center gap-2 hover:text-green-500 transition duration-300">
          <FaPhone className="w-4 h-4 rotate-90" />
          <span>(225) 555-0118</span>
        </div>

        {/* Email Icon with Address */}
        <div className="flex items-center gap-2 hover:text-green-500 transition duration-300">
          <FaEnvelope className="w-4 h-4" />
          <span>michelle.rivera@example.com</span>
        </div>
      </div>

      {/* Right Section: Promotional Text */}
      <div>
        Follow Us & get a chance to win <span className="font-bold">80% off</span>
      </div>

      {/* Social Media Icons */}
      <div className="flex items-center">
        <p className="text-sm mr-4">Follow Us:</p>
        <div className="flex space-x-4 text-xl">
          <a
            href="#"
            className="text-white hover:text-sky-500 transition duration-300"
            title="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="#"
            className="text-white hover:text-pink-500 transition duration-300"
            title="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="text-white hover:text-red-600 transition duration-300"
            title="YouTube"
          >
            <FaYoutube />
          </a>
          <a
            href="#"
            className="text-white hover:text-blue-400 transition duration-300"
            title="Twitter"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;

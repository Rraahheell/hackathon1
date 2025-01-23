"use client";
import React, { useState } from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const Contact = () => {
  const [selected, setSelected] = useState("location"); // Initially select the middle chart

  return (
    <div className="bg-white py-20 px-8">
      {/* Header Section */}
      <h2 className="text-center text-gray-700 font-semibold mb-2 tracking-wide">
        VISIT OUR OFFICE
      </h2>
      <h1 className="text-center text-3xl font-bold text-gray-900 mb-12">
        We help small businesses
        <br />
        with big ideas
      </h1>

      {/* Contact Options */}
      <div className="flex flex-col md:flex-row justify-center gap-10 relative">
        {/* Phone Section */}
        <div
          onClick={() => setSelected("phone")}
          className={`relative text-center flex flex-col items-center justify-center border border-gray-300 p-8 cursor-pointer shadow-2xl transition-all transform ${
            selected === "phone"
              ? "bg-gray-800 text-white scale-105"
              : "bg-white text-gray-900 hover:scale-105 hover:shadow-xl"
          }`}
          style={{ height: "400px" }}
        >
          <div className="flex flex-col items-center -mt-6">
            <FiPhone className="text-sky-500 text-5xl mb-4" />
            <p className="text-sm">georgia.young@example.com</p>
            <p className="text-sm mb-6">georgia.young@ple.com</p>
            <p className="font-medium mb-4">Get Support</p>
            <button className="border border-sky-500 text-sky-500 py-3 px-8 text-sm rounded bg-transparent hover:bg-sky-500 hover:text-white transition">
              Submit Request
            </button>
          </div>
        </div>

        {/* Location Section (Middle Chart) */}
        <div
          onClick={() => setSelected("location")}
          className={`relative text-center flex flex-col items-center justify-center border border-gray-300 p-8 cursor-pointer shadow-2xl transition-all transform ${
            selected === "location"
              ? "bg-gray-800 text-white scale-105"
              : "bg-white text-gray-900 hover:scale-105 hover:shadow-xl"
          }`}
          style={{ height: "400px", marginTop: "40px" }} // Entire chart is lowered
        >
          <div className="flex flex-col items-center -mt-6">
            <FiMapPin className="text-sky-500 text-6xl mb-4" />
            <p className="text-sm">georgia.young@example.com</p>
            <p className="text-sm mb-6">georgia.young@ple.com</p>
            <p className="font-medium mb-4">Get Support</p>
            <button className="border border-sky-500 text-sky-500 py-3 px-8 text-sm rounded bg-transparent hover:bg-sky-500 hover:text-white transition">
              Submit Request
            </button>
          </div>
        </div>

        {/* Email Section */}
        <div
          onClick={() => setSelected("email")}
          className={`relative text-center flex flex-col items-center justify-center border border-gray-300 p-8 cursor-pointer shadow-2xl transition-all transform ${
            selected === "email"
              ? "bg-gray-800 text-white scale-105"
              : "bg-white text-gray-900 hover:scale-105 hover:shadow-xl"
          }`}
          style={{ height: "400px" }}
        >
          <div className="flex flex-col items-center -mt-6">
            <FiMail className="text-sky-500 text-5xl mb-4" />
            <p className="text-sm">georgia.young@example.com</p>
            <p className="text-sm mb-6">georgia.young@ple.com</p>
            <p className="font-medium mb-4">Get Support</p>
            <button className="border border-sky-500 text-sky-500 py-3 px-8 text-sm rounded bg-transparent hover:bg-sky-500 hover:text-white transition">
              Submit Request
            </button>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="flex justify-center items-center">
        <svg
          fill="currentColor"
          height="150px"
          width="80px"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="-30.28 -30.28 363.38 363.38"
          style={{ transform: "rotate(180deg)" }} // Directly apply the rotation here
          className="text-sky-500"
        >
          {/* SVG Path */}
        </svg>
      </div>

      <div className="text-center mt-8">
        <p className="text-gray-500 text-sm mb-4 tracking-wide">
          WE CAN'T WAIT TO MEET YOU
        </p>
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Let's Talk</h2>
        <button className="border border-sky-500 text-sky-500 py-3 px-10 text-lg bg-transparent hover:bg-sky-500 hover:text-white transition">
          Try it free now
        </button>
      </div>
    </div>
  );
};

export default Contact;

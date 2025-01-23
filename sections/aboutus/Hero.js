import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gray-50 py-16 px-8 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <p
            className="text-md text-gray-700 uppercase font-semibold mb-8"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            ABOUT COMPANY
          </p>
          <h1
            className="text-6xl font-bold text-gray-800 mb-6"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            ABOUT US
          </h1>
          <p
            className="text-lg tracking-widest font-semibold text-gray-600 mb-8"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            We know how large objects will act, <br /> but things on a small scale
          </p>
          <button
            className="bg-sky-500 tracking-widest text-white py-4 px-8 rounded-md text-sm font-semibold shadow-md hover:bg-sky-600 transition"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Get Quote Now
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end relative">
          <div className="relative">
            <img
              src="https://res.cloudinary.com/dvbc6ctqu/image/upload/v1734854785/technology_1_1_pkswge.png"
              alt="About Us"
              className="w-full max-w-md lg:max-w-lg rounded-lg relative z-10 hover:scale-105 hover:shadow-lg transition duration-300"
            />
            <div className="absolute top-[75%] left-[-8px] w-3 h-3 rounded-full bg-purple-400  transition duration-300"></div>
            <div className="absolute bottom-[68%] right-[0%] w-3 h-3 rounded-full bg-purple-400 transition duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

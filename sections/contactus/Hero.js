import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

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
            Contact Us
          </p>
          <h1
            className="text-6xl font-bold text-gray-800 mb-6 leading-tight"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Get in touch <br />
            <span className="text-sky-500">Today!</span>
          </h1>
          <p
            className="text-lg text-gray-500 font-bold mb-8 tracking-wide leading-relaxed"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            We know how large objects will act, but <br />
            things on a small scale.
          </p>
          <div className="mb-6">
            <p className="text-gray-800 font-bold">
              Phone : <span>+451 215 215</span>
            </p>
            <p className="text-gray-800 font-bold mt-2">
              Fax : <span>+451 215 215</span>
            </p>
          </div>
          <div className="flex justify-center lg:justify-start gap-4 mt-4">
            <FaFacebook className="text-gray-600 w-6 h-6 hover:text-blue-500 transition duration-300 cursor-pointer" />
            <FaTwitter className="text-gray-600 w-6 h-6 hover:text-sky-400 transition duration-300 cursor-pointer" />
            <FaInstagram className="text-gray-600 w-6 h-6 hover:text-pink-500 transition duration-300 cursor-pointer" />
            <FaLinkedin className="text-gray-600 w-6 h-6 hover:text-blue-700 transition duration-300 cursor-pointer" />
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end relative">
          <div className="relative">
            <img
              src="https://s3-alpha-sig.figma.com/img/0bec/d76f/b529bdb1f9ac06ee979d8665aade6757?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Bj3ZcfvHGnYV960O~SencZSJ6AqMXLfA4Ozb~TawNwV9qyT5YaES-tYfvaHnd2HCjdmMZ9D0mBP7Wz7rmn22qdN8dXw0vSfxxZj57ZZjKGg0AXaVvbUrJbW-WA6gdU3hNCvlba-nP19~YcW3VZdOA~1XjInMW5m2fOLu8mUN-j55hPcUxZNFDzkl-NWKJiI1s-IqVI1MJ3Cx0O9aQcNN2swxVUlPO49uKPTrgDKhhjzlt6xpRPsN3nVxVtmG763zkD~~wMfzU9a9ymbD0p7B6Wg~AvuM2iqBtuwQM3ctMDPYSUrBrQiF9jASyGVWxBjuC5LSKIQ8xiRZHOCB8sY~tw__"
              alt="Contact Us"
             className="w-full max-w-8xl lg:max-w-8xl h-[500px] rounded-lg object-cover relative z-10 hover:scale-105 transition duration-300"
            />
            <div className="absolute top-[75%] left-[100px] w-3 h-3 rounded-full bg-purple-400 transition duration-300"></div>
            <div className="absolute bottom-[80%] right-[20%] w-3 h-3 rounded-full bg-purple-400 transition duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

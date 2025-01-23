import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const FreeTrial = () => {
  return (
    <section className="bg-white py-10 sm:py-16">
      <div className="max-w-screen-md mx-auto text-center px-4">
        {/* Main Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-800 mb-4 sm:mb-6">
          Start your 14 days free trial
        </h2>

        {/* Subheading */}
        <p className="text-gray-500 text-sm sm:text-base lg:text-lg mb-6 leading-tight mx-auto max-w-xs sm:max-w-md">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent official consequent.
        </p>

        {/* CTA Button */}
        <button className="bg-sky-500 hover:bg-sky-600 text-white font-medium py-2 sm:py-3 px-6 rounded-md shadow-md mb-8 transition duration-300">
          Try it free now
        </button>

        {/* Social Media Icons */}
        <div className="flex items-center justify-center gap-6 sm:gap-8">
          <a
            href="#"
            className="text-gray-400 hover:text-blue-500 text-2xl sm:text-3xl transition duration-300"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-blue-700 text-2xl sm:text-3xl transition duration-300"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-pink-500 text-2xl sm:text-3xl transition duration-300"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-blue-600 text-2xl sm:text-3xl transition duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FreeTrial;

import React from 'react';

const Intro = () => (
  <section className="bg-white py-12">
    <div className="container mx-auto px-6 lg:px-16 xl:px-24">
      <h4 className="text-sm tracking-wider text-red-500 font-semibold mb-0 md:mb-10 text-center md:text-left">
        Problems trying
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 leading-snug md:leading-tight text-center md:text-left mb-0 md:mb-6">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </h2>
        </div>
        <div>
          <p className="text-gray-600 text-base lg:text-lg leading-relaxed md:leading-normal text-center md:text-left">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Intro;

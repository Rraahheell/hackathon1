'use client';

import React from 'react';

const EditorsPick = () => {
  return (
    <section className="max-w-screen-lg mx-auto py-8 mt-11">
      {/* Section Heading */}
      <h2 className="text-center text-gray-800 text-2xl font-bold uppercase mb-2">
        Editor's Pick
      </h2>
      <p className="text-center text-gray-500 text-sm mb-6 tracking-widest font-semibold">
        Problems trying to resolve the conflict between
      </p>

      {/* Layout */}
      <div className="md:grid md:grid-cols-4 md:gap-4 flex flex-col gap-4">
        {/* Men */}
        <div className="relative group md:col-span-2 md:row-span-2 overflow-hidden rounded shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1579038773867-044c48829161?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Men"
            className="w-full h-auto rounded object-cover md:w-full md:h-full"
          />
          <div className="absolute bottom-4 left-4 bg-white bg-opacity-75 px-4 py-2 text-black text-lg font-bold">
            Men
          </div>
        </div>

        {/* Women */}
        <div className="relative group md:col-span-1 md:row-span-2 overflow-hidden rounded shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1542145713-b1b5bdffdb61?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Women"
            className="w-full h-auto rounded object-cover md:w-full md:h-full"
          />
          <div className="absolute bottom-4 left-4 bg-white bg-opacity-75 px-4 py-2 text-black text-lg font-bold">
            Women
          </div>
        </div>

        {/* Accessories */}
        <div className="relative group md:col-span-1 md:row-span-1 overflow-hidden rounded shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1638657704712-dce36957c97f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGFjY2Vzb3JpZXN8ZW58MHx8MHx8fDA%3D"
            alt="Accessories"
            className="w-full h-auto rounded object-cover md:w-full md:h-full"
          />
          <div className="absolute bottom-4 left-4 bg-white bg-opacity-75 px-4 py-2 text-black text-lg font-bold">
            Accessories
          </div>
        </div>

        {/* Kids */}
        <div className="relative group md:col-span-1 md:row-span-1 overflow-hidden rounded shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1618830301945-a4b6c5e94c1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxraWRzJTIwZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D"
            alt="Kids"
            className="w-full h-auto rounded object-cover md:w-full md:h-full"
          />
          <div className="absolute bottom-4 left-4 bg-white bg-opacity-75 px-4 py-2 text-black text-lg font-bold">
            Kids
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorsPick;

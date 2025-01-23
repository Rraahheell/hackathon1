'use client';

import Link from 'next/link';
import React from 'react';

// Function to generate a random ID based on category ranges
const generateRandomId = (category) => {
  const ranges = {
    men: [1, 20],
    women: [21, 40],
    kids: [41, 60],
    accessories: [61, 80],
  };
  const [min, max] = ranges[category];
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

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
          <Link href={`/products/men?id=${generateRandomId('men')}`}>
            <img
              src="https://images.unsplash.com/photo-1579038773867-044c48829161?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Men"
              className="w-full h-auto rounded object-cover md:w-full md:h-full"
            />
            <div className="absolute bottom-4 left-4 bg-white bg-opacity-75 px-4 py-2 text-black text-lg font-bold">
              Men
            </div>
          </Link>
        </div>

        {/* Women */}
        <div className="relative group md:col-span-1 md:row-span-2 overflow-hidden rounded shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg">
          <Link href={`/products/women?id=${generateRandomId('women')}`}>
            <img
              src="https://images.unsplash.com/photo-1542145713-b1b5bdffdb61?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Women"
              className="w-full h-auto rounded object-cover md:w-full md:h-full"
            />
            <div className="absolute bottom-4 left-4 bg-white bg-opacity-75 px-4 py-2 text-black text-lg font-bold">
              Women
            </div>
          </Link>
        </div>

        {/* Accessories */}
        <div className="relative group md:col-span-1 md:row-span-1 overflow-hidden rounded shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg">
          <Link href={`/products/accessories?id=${generateRandomId('accessories')}`}>
            <img
              src="https://images.unsplash.com/photo-1638657704712-dce36957c97f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGFjY2Vzb3JpZXN8ZW58MHx8MHx8fDA%3D"
              alt="Accessories"
              className="w-full h-auto rounded object-cover md:w-full md:h-full"
            />
            <div className="absolute bottom-4 left-4 bg-white bg-opacity-75 px-4 py-2 text-black text-lg font-bold">
              Accessories
            </div>
          </Link>
        </div>

        {/* Kids */}
        <div className="relative group md:col-span-1 md:row-span-1 overflow-hidden rounded shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg">
          <Link href={`/products/kids?id=${generateRandomId('kids')}`}>
            <img
              src="https://images.unsplash.com/photo-1618830301945-a4b6c5e94c1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxraWRzJTIwZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D"
              alt="Kids"
              className="w-full h-auto rounded object-cover md:w-full md:h-full"
            />
            <div className="absolute bottom-4 left-4 bg-white bg-opacity-75 px-4 py-2 text-black text-lg font-bold">
              Kids
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EditorsPick;

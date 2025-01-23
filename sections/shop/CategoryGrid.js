'use client';

import Link from 'next/link';
import React from 'react';

// Function to generate a random ID based on category ranges
const generateRandomId = (category) => {
  const ranges = {
    all: [1, 80],
    men: [1, 20],
    women: [21, 40],
    kids: [41, 60],
    accessories: [61, 80],
  };
  const [min, max] = ranges[category];
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const CategoryGrid = () => {
  const categories = [
    {
      name: 'All Categories',
      link: `/products/all?id=${generateRandomId('all')}`,
      image: 'https://images.unsplash.com/photo-1506836467174-27f1042aa48c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Men',
      link: `/products/men?id=${generateRandomId('men')}`,
      image: 'https://images.unsplash.com/photo-1511287080534-fe9d6cd10e68?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Women',
      link: `/products/women?id=${generateRandomId('women')}`,
      image: 'https://images.unsplash.com/photo-1542145713-b1b5bdffdb61?q=80&w=1887&auto=format&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Kids',
      link: `/products/kids?id=${generateRandomId('kids')}`,
      image: 'https://images.unsplash.com/photo-1618830301945-a4b6c5e94c1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxraWRzJTIwZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      name: 'Accessories',
      link: `/products/accessories?id=${generateRandomId('accessories')}`,
      image: 'https://images.unsplash.com/photo-1638657704712-dce36957c97f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGFjY2Vzb3JpZXN8ZW58MHx8MHx8fDA%3D',
    },
  ];

  return (
    <section className="max-w-screen-lg mx-auto py-8 mt-11">
      {/* Section Heading */}
      <h2 className="text-center text-gray-800 text-2xl font-bold uppercase mb-2">
        Shop by Category
      </h2>
      <p className="text-center text-gray-500 text-sm mb-6 tracking-widest font-semibold">
        Discover your perfect style
      </p>

      {/* Grid Layout */}
      <div className="grid grid-cols-5 gap-4">
        {/* Left Column - All Categories */}
        <div className="col-span-2 row-span-2">
          <Link href={categories[0].link}>
            <div className="relative group overflow-hidden rounded shadow-md h-[617px]">
              <img
                src={categories[0].image}
                alt={categories[0].name}
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-50 transition duration-300"></div>
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 px-4 py-2 text-white text-lg font-bold">
                {categories[0].name}
              </div>
            </div>
          </Link>
        </div>

        {/* Middle Column - Men & Women */}
        <div className="col-span-2 grid grid-rows-2 gap-4">
          {categories.slice(1, 3).map((category, index) => (
            <Link href={category.link} key={index}>
              <div className="relative group overflow-hidden rounded shadow-md h-[300px]">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-50 transition duration-300"></div>
                <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 px-4 py-2 text-white text-lg font-bold">
                  {category.name}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Right Column - Kids & Accessories */}
        <div className="col-span-1 grid grid-rows-2 gap-4">
          {categories.slice(3).map((category, index) => (
            <Link href={category.link} key={index}>
              <div className="relative group overflow-hidden rounded shadow-md h-[300px]">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-50 transition duration-300"></div>
                <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 px-4 py-2 text-white text-lg font-bold">
                  {category.name}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;

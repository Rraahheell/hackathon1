'use client';

import Link from 'next/link';
import React from 'react';

function getRandomNumber() {
  return Math.floor(Math.random() * 80) + 1;
}
let randomNumber = getRandomNumber();

const HeroSection = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", // Replace this with a suitable image URL
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold uppercase mb-4 tracking-wide">
          Welcome to Shop
        </h1>
        <p className="text-lg md:text-xl font-medium mb-6">
          Your one-stop destination for style and value.
        </p>
        <Link href={`/products/all?id=${randomNumber}`}>
          <button className="px-6 py-3 border-2 border-sky-500 text-white font-semibold text-lg rounded-lg transition duration-300 hover:bg-sky-500 hover:bg-opacity-20 hover:shadow-lg">
            Shop Now
          </button>

        </Link>
      </div>
    </section>
  );
};

export default HeroSection;

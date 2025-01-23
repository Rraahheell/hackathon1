'use client';

import React from 'react';
import Link from 'next/link';
import { products } from '@/constants/Constants'; // Replace with your actual products source

// Utility function to get random products from a specific category
const getRandomProducts = (category, count) => {
  const filteredProducts = products.filter((product) => product.category === category);
  return filteredProducts.sort(() => Math.random() - 0.5).slice(0, count);
};

const BestSeller = () => {
  const menProducts = getRandomProducts('Men', 2);
  const womenProducts = getRandomProducts('Women', 2);
  const kidsProducts = getRandomProducts('Kids', 2);
  const accessoriesProducts = getRandomProducts('Accessories', 2);

  const selectedProducts = [...menProducts, ...womenProducts, ...kidsProducts, ...accessoriesProducts];

  return (
    <section className="max-w-screen-xl mx-auto py-8">
      {/* Section Heading */}
      <h2 className="text-center tracking-wide text-gray-400 text-lg my-1 mt-10">Featured Products</h2>
      <h2 className="text-center text-gray-800 tracking-wide text-xl font-bold uppercase mb-2">Bestseller Products</h2>
      <p className="text-center text-gray-500 text-sm mb-6">
        Problems trying to resolve the conflict between
      </p>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {selectedProducts.map((product) => (
          <Link
            key={product.id} // Ensure unique key
            href={`/products/${product.category.toLowerCase()}?id=${product.id}`} // Dynamic URL
          >
            <div className="bg-white shadow-lg rounded border border-gray-300 p-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              {/* Product Image */}
              <div className="w-full h-64 rounded-md overflow-hidden flex items-center justify-center">
                <img
                  src={product.images[0]}
                  alt={product.title || 'Product Image'}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Product Info */}
              <h3 className="text-sm font-bold mt-4">{product.title || 'Unnamed Product'}</h3>
              <p className="text-xs text-gray-500">{product.category || 'No Category'}</p>
              <p className="text-sm font-bold mt-2">
                <span className="line-through text-gray-400">{product.oldPrice || '$20.00'}</span>{' '}
                <span className="text-green-500">{product.price || '$10.00'}</span>
              </p>
              {/* Color Options */}
              <div className="flex space-x-2 mt-2">
                {['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500'].map((color, idx) => (
                  <div key={idx} className={`w-4 h-4 rounded-full ${color}`}></div>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BestSeller;

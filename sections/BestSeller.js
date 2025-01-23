import React from 'react';

const BestSeller = () => {
  // Array of product image URLs
  const productImages = [
    "https://images.unsplash.com/photo-1457541377139-24e401c053fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hpcnRzfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1580047883831-5db03837b0b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29hdHxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1543274747-e969ff86c466?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvYXR8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1553632786-0cfb0ce7dacb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvYXR8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvYXR8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1722851721443-e3a83a31a5cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNoYWx3YXIlMjBrYW1lZXp8ZW58MHx8MHx8fDA%3D",
    "https://plus.unsplash.com/premium_photo-1691030256201-b73e0d0c60e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE0fHxzaGFsd2FyJTIwa2FtZWV6fGVufDB8fDB8fHww",
  ];

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
        {productImages.map((image, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded border border-gray-300 p-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            {/* Product Image */}
            <img
              src={image}
              alt={`Product ${index + 1}`}
              className="w-full h-auto rounded mb-4"
            />
            {/* Product Info */}
            <h3 className="text-sm font-bold">Graphic Design</h3>
            <p className="text-xs text-gray-500">English Department</p>
            <p className="text-sm font-bold mt-2">
              <span className="line-through text-gray-400">$16.48</span>{' '}
              <span className="text-green-500">$6.48</span>
            </p>
            {/* Color Options */}
            <div className="flex space-x-2 mt-2">
              {['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500'].map((color, idx) => (
                <div key={idx} className={`w-4 h-4 rounded-full ${color}`}></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSeller;

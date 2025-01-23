import React from 'react';

const Stats = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-6 lg:px-20 text-center">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-12">
          <div>
            <h2 className="text-5xl font-extrabold text-gray-900">15K</h2>
            <p className="text-gray-500 text-sm font-semibold">Happy Customers</p>
          </div>
          <div>
            <h2 className="text-5xl font-extrabold text-gray-900">150K</h2>
            <p className="text-gray-500 text-sm font-semibold">Monthly Visitors</p>
          </div>
          <div>
            <h2 className="text-5xl font-extrabold text-gray-900">15</h2>
            <p className="text-gray-500 text-sm font-semibold">Countries Worldwide</p>
          </div>
          <div>
            <h2 className="text-5xl font-extrabold text-gray-900">100+</h2>
            <p className="text-gray-500 text-sm font-semibold">Top Partners</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;

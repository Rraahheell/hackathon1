import React from "react";

const WorkWithUs = () => {
  return (
    <div className="bg-gray-50">
      {/* Header Section */}
      <div className="relative h-[600px] md:h-[700px] flex flex-col sm:flex-row">
        {/* Left Text Section */}
        <div className="flex-1 bg-blue-500 text-white flex flex-col justify-center items-center sm:items-start text-center sm:text-left px-6 sm:pl-20 md:pl-32 lg:pl-40">
          <h2 className="text-lg uppercase tracking-wider mb-2 w-full sm:w-auto">
            Work with Us
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Now Let's grow Yours
          </h1>
          <p className="mb-6 max-w-lg">
            The gradual accumulation of information about atomic and small-scale
            behavior during the first quarter of the 20th.
          </p>
          {/* Button with Fixed Width */}
          <button className="w-40 px-4 py-3 border border-white text-white rounded-md hover:bg-white font-bold hover:text-blue-500 transition duration-300">
            Button
          </button>
        </div>

        {/* Right Image Section */}
        <div className="flex-1 relative hidden sm:block">
          <div className="absolute inset-0 bg-blue-500"></div> {/* Blue background */}
          <img
            src="https://images.unsplash.com/photo-1583099107130-fb2f17192c43?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Model"
            className="absolute top-0 right-0 h-full w-3/4 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default WorkWithUs;

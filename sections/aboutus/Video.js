"use client";

import React, { useState } from "react";

const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
    setIsLoading(true); // Show the loading spinner when play is clicked
  };

  const handleStop = () => setIsPlaying(false);

  const handleLoadedData = () => {
    setIsLoading(false); // Hide the spinner once the video is ready
  };

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 lg:px-20 text-center">
        <div
          className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
          style={{ aspectRatio: "16 / 9" }}
        >
          {/* Thumbnail or Play Button */}
          {!isPlaying && (
            <div
              className="absolute inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50 cursor-pointer"
              onClick={handlePlay}
            >
              {/* Custom thumbnail */}
              <img
                src="https://images.unsplash.com/photo-1535553786276-ba3c1681ad75?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Fashion Thumbnail"
                className="absolute inset-0 w-full h-full object-cover rounded-lg transform transition duration-300 hover:scale-110"
              />
              <div className="absolute z-20 w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center transform transition duration-300 hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12 text-white"
                  fill="white"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.752 11.168l-5.197-3.013A1 1 0 008 9.017v5.966a1 1 0 001.555.832l5.197-3.013a1 1 0 000-1.664z"
                  />
                </svg>
              </div>
            </div>
          )}

          {/* Video */}
          {isPlaying && (
            <>
              {isLoading && (
                <div className="absolute inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50">
                  <div className="w-16 h-16 border-4 border-sky-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
              <video
                className="absolute inset-0 w-full h-full rounded-lg"
                autoPlay
                loop
                muted
                onClick={handleStop}
                onLoadedData={handleLoadedData} // Hide spinner when video is ready
              >
                <source
                  src="https://res.cloudinary.com/dvbc6ctqu/video/upload/v1734871188/22931965_pehviz.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Video;

import React from 'react';

const HomePage = () => {
    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <section style={{ backgroundColor: '#23856d' }} className="text-white py-14">
                <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center gap-8 px-4">
                    {/* Text Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <p className="text-lg uppercase font-normal mb-5">Summer 2020</p>
                        <h1 className="text-6xl font-bold leading-tight my-4">
                            Vita Classic<br /> Product
                        </h1>
                        <p className="text-sm font-medium mb-6 tracking-wide">
                            We know how large objects will act, but things on a small scale.
                        </p>
                        <div className="flex items-center justify-center lg:justify-start gap-4">
                            <p className="text-2xl font-bold">$16.48</p>
                            <button className="bg-green-500 hover:bg-green-600 px-7 py-3 rounded text-white font-bold">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                    {/* Image */}
                    <div className="flex-1">
                        <img
                            src="https://res.cloudinary.com/dvbc6ctqu/image/upload/v1734727783/shop-hero-2-png-picture-1_mzdvop.png"
                            alt="Product"
                            className="w-full max-w-md lg:max-w-lg mx-auto transform transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                </div>
            </section>

            {/* Subsection */}
            <section className="bg-white py-12">
                <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center gap-8 px-4">
                    {/* Image */}
                    <div className="flex-1 order-2 lg:order-1">
                        <img
                            src="https://res.cloudinary.com/dvbc6ctqu/image/upload/v1734816380/asian-woman-man-with-winter-clothes_1_ix5ree.png"
                            alt="People"
                            className="rounded shadow-lg w-full max-w-md lg:max-w-lg mx-auto transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                        />
                    </div>
                    {/* Text Content */}
                    <div className="flex-1 text-center lg:text-left order-1 lg:order-2">
                        <p className="text-sm uppercase font-bold tracking-widest text-gray-400 mb-7">
                            SUMMER 2020
                        </p>
                        <h2 className="text-4xl text-gray-800 font-bold mb-6">
                            Part of the Neural <br /> Universe
                        </h2>
                        <p className="text-gray-500 tracking-wide mb-8">
                            We know how large objects will act, <br /> but things on a small scale.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <button className="bg-sky-500 hover:bg-sky-600 px-8 py-3 rounded text-sm text-white font-bold">
                                BUY NOW
                            </button>
                            <button className="bg-gray-200 text-sky-500 hover:bg-gray-300 px-8 py-3 rounded text-sm font-bold border border-sky-500">
                                READ MORE
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;

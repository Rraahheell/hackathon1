import React from 'react';

const Hero = () => {
    return (
        <section
            className="bg-cover bg-center text-white py-12 px-6 flex items-center"
            style={{
                backgroundImage: "url('https://res.cloudinary.com/dvbc6ctqu/image/upload/v1734812870/background_aqhfyy_1_mavnff.png')",
                height: '850px',
            }}
        >
            <div className="w-full md:ml-12 text-center md:text-left">
                <p className="text-sm uppercase tracking-wider font-bold">Summer 2020</p>
                <h1 className="text-5xl md:text-7xl font-bold my-5 uppercase">New Collection</h1>
                <p className="font-bold text-lg tracking-wide">
                    We know how large objects will act, but things on a small scale.
                </p>
                <button
                    className="mt-6 py-3 px-8 rounded font-bold uppercase text-lg"
                    style={{
                        backgroundColor: '#2dc071',
                        color: 'white',
                    }}
                >
                    Shop Now
                </button>
            </div>
        </section>
    );
};

export default Hero;

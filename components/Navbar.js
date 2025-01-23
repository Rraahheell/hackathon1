'use client'
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-white shadow-md">
            <div className="container flex justify-between items-center py-4 px-6">
                <Link href="/" className="md:hidden text-2xl font-bold text-gray-800 mr-10">Bandage</Link>
                <div className="hidden text-lg md:flex items-center gap-6">
                    <Link href="/" className="text-2xl font-bold text-gray-800 mr-10">Bandage</Link>
                    <Link href="/" className="text-gray-700 hover:text-sky-500 hover:scale-105 transition-all duration-300">
                        Home
                    </Link>
                    <Link href="/shop" className="text-gray-700 hover:text-sky-500 hover:scale-105 transition-all duration-300">
                        Shop
                    </Link>
                    <Link href="/about" className="text-gray-700 hover:text-sky-500 hover:scale-105 transition-all duration-300">
                        About Us
                    </Link>
                    <Link href="/pricing" className="text-gray-700 hover:text-sky-500 hover:scale-105 transition-all duration-300">
                        Pricing
                    </Link>
                    <Link href="/contact" className="text-gray-700 hover:text-sky-500 hover:scale-105 transition-all duration-300">
                        Contact
                    </Link>
                </div>
                {/* Desktop Links */}
                <div className='md:flex hidden'>
                    <a href="/login" className="text-sky-400 font-bold font-lg mx-5 hover:scale-105 transition-all duration-300">
                        Login / Register
                    </a>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-sky-400 ml-3 hover:scale-105 transition-all duration-300">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 18a8 8 0 100-16 8 8 0 000 16zm6.293-1.293l4.707 4.707-1.414 1.414-4.707-4.707a9.97 9.97 0 01-1.414 1.414z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-sky-400 ml-4 hover:scale-105 transition-all duration-300">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a4.5 4.5 0 010-6.364z" />
                    </svg>
                    <span className='text-sky-400 hover:scale-105 transition-all duration-300'>1</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 ml-4 text-sky-400 hover:scale-105 transition-all duration-300">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18l-2 9H5L3 3z" />
                        <circle cx="9" cy="19" r="2" stroke="currentColor" strokeWidth="2" />
                        <circle cx="17" cy="19" r="2" stroke="currentColor" strokeWidth="2" />
                    </svg>
                    <span className='text-sky-400 hover:scale-105 transition-all duration-300'>1</span>
                </div>

                <button
                    className="md:hidden text-gray-700 focus:outline-none"
                    onClick={toggleMenu}
                >
                    <i className={`fa ${isMenuOpen ? 'fa-times' : 'fa-bars'}`} aria-hidden="true"></i>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <ul className="md:hidden bg-white shadow-lg text-lg text-gray-800 flex flex-col items-center space-y-4 py-4">
                    <li>
                        <Link href="/" className="hover:bg-sky-200 active:bg-sky-200 focus:bg-sky-200 hover:scale-105 transition-all duration-300 px-10 py-3 rounded w-full text-center">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/shop" className="hover:bg-sky-200 active:bg-sky-200 focus:bg-sky-200 hover:scale-105 transition-all duration-300 px-10 py-3 rounded w-full text-center">
                            Shop
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="hover:bg-sky-200 active:bg-sky-200 focus:bg-sky-200 hover:scale-105 transition-all duration-300 px-10 py-3 rounded w-full text-center">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/pricing" className="hover:bg-sky-200 active:bg-sky-200 focus:bg-sky-200 hover:scale-105 transition-all duration-300 px-10 py-3 rounded w-full text-center">
                            Pricing
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="hover:bg-sky-200 active:bg-sky-200 focus:bg-sky-200 hover:scale-105 transition-all duration-300 px-10 py-3 rounded w-full text-center">
                            Contact
                        </Link>
                    </li>
                    <li>
                        <a href="/login" className="hover:bg-sky-200 active:bg-sky-200 focus:bg-sky-200 hover:scale-105 transition-all duration-300 px-4 py-3 rounded w-full text-center">
                            Login / Register
                        </a>
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;

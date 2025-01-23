'use client';

import React, { useState, useEffect } from 'react';
import { products } from '@/constants/Constants';
import { useRouter, useSearchParams } from 'next/navigation';
import { FiHeart, FiEye, FiShoppingCart } from "react-icons/fi";

const ShowProducts = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const productId = searchParams.get('id');
    const [isFavorited, setIsFavorited] = useState(false);
    const [isEyeOpen, setIsEyeOpen] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    const [isCartAdded, setIsCartAdded] = useState(false);
    const [imageIndex, setImageIndex] = useState(0);
    const [activeTab, setActiveTab] = useState('description');
    const [newStars, setNewStars] = useState(0);
    const [newName, setNewName] = useState('');
    const [newReview, setNewReview] = useState('');
    const [reviews, setReviews] = useState([
        {
            id: 1,
            name: "John Doe",
            avatar: "https://thumbs.dreamstime.com/b/portrait-young-handsome-happy-man-wearing-glasses-casual-smart-blue-clothing-yellow-color-background-square-composition-200740125.jpg",
            stars: 5,
            text: "Amazing product! Exceeded my expectations. Highly recommend it to anyone looking for high quality."
        },
        {
            id: 2,
            name: "Jane Smith",
            avatar: "https://cdn.openart.ai/published/TmRw4LVMAzuvOSVAghgu/qqNe4t8K_7R5s_1024.webp",
            stars: 4,
            text: "Very good product but the sizing was a little off. Still a great purchase overall!"
        },
    ]);

    let product = products.find((prod) => prod.id === parseInt(productId, 10));
    if (!product) {
        return (
            <div className="flex items-center justify-center min-h-screen text-gray-600">
                <h1 className="text-2xl font-bold">Product not found.</h1>
            </div>
        );
    }
    const getCategoryFromId = (id) => {
        if (id >= 1 && id <= 20) return 'men';
        if (id >= 21 && id <= 40) return 'women';
        if (id >= 41 && id <= 60) return 'kids';
        if (id >= 61 && id <= 80) return 'accessories';
        return 'men'; // Default to 'men' if outside of the specified ranges
    };

    // Navigate to the next product
    const handleNextProduct = () => {
        let newProductId = parseInt(productId, 10);
        let newCategory = getCategoryFromId(newProductId);

        if (newCategory === 'men') {
            if (newProductId < 20) newProductId++;
            else { newProductId = 21; newCategory = 'women'; }
        } else if (newCategory === 'women') {
            if (newProductId < 40) newProductId++;
            else { newProductId = 41; newCategory = 'kids'; }
        } else if (newCategory === 'kids') {
            if (newProductId < 60) newProductId++;
            else { newProductId = 61; newCategory = 'accessories'; }
        } else if (newCategory === 'accessories') {
            if (newProductId < 80) newProductId++;
            else { newProductId = 1; newCategory = 'men'; }
        }

        router.push(`/products/${newCategory}?id=${newProductId}`);
    };

    const handlePrevProduct = () => {
        let newProductId = parseInt(productId, 10);
        let newCategory = getCategoryFromId(newProductId);

        if (newCategory === 'men') {
            if (newProductId > 1) newProductId--;
            else { newProductId = 20; newCategory = 'accessories'; }
        } else if (newCategory === 'women') {
            if (newProductId > 21) newProductId--;
            else { newProductId = 20; newCategory = 'men'; }
        } else if (newCategory === 'kids') {
            if (newProductId > 41) newProductId--;
            else { newProductId = 40; newCategory = 'women'; }
        } else if (newCategory === 'accessories') {
            if (newProductId > 61) newProductId--;
            else { newProductId = 60; newCategory = 'kids'; }
        }

        router.push(`/products/${newCategory}?id=${newProductId}`);
    };
    // Automatically change the background every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setImageIndex((prevIndex) => (prevIndex + 1) % product.images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [product.images.length]);

    // Handle image navigation (change image within the same product)
    const handleNextImage = () => {
        setImageIndex((prevIndex) => (prevIndex + 1) % product.images.length);
    };

    const handlePrevImage = () => {
        setImageIndex((prevIndex) => (prevIndex - 1 + product.images.length) % product.images.length);
    };

    // Handle adding a new review
    const handleAddReview = () => {
        // Set the name to 'Anonymous' if not provided
        const reviewName = newName.trim() ? newName : "Anonymous";

        if (newReview && newStars > 0) {
            const newReviewData = {
                id: reviews.length + 1,
                name: reviewName,
                avatar: "/images/default-avatar.jpg", // Default avatar
                stars: newStars,
                text: newReview,
            };
            setReviews((prevReviews) => [...prevReviews, newReviewData]);
            setNewReview("");
            setNewStars(0);
            setNewName(""); // Clear the name input
        } else {
            alert("Please enter a review, select a rating, and provide a name if you want!");
        }
    };
    const calculateAverageRating = () => {
        const totalStars = reviews.reduce((acc, review) => acc + review.stars, 0);
        return (totalStars / reviews.length).toFixed(1);
    };
    const showToast = (message) => {
        setToastMessage(message);
        setTimeout(() => setToastMessage(""), 2000); // Remove after 2 seconds
    };

    // Handlers for actions
    const handleAddToCart = () => {
        setIsCartAdded(!isCartAdded);
    };

    const handleToggleFavorite = () => {
        setIsFavorited(!isFavorited);
        showToast(isFavorited ? "Removed from Favorites" : "Added to Favorites");
    };

    const handleToggleEye = () => {
        setIsEyeOpen(!isEyeOpen);
        showToast(isEyeOpen ? "Removed from Wishlist" : "Added to Wishlist");
    };
    return (
        <div className="relative w-full min-h-screen">
            {/* Blurred Background */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${product.images[imageIndex]})`,
                    zIndex: -1,
                    borderRadius: '16px',
                    border: '8px solid rgba(255, 255, 255, 0.5)',
                    transform: 'scale(1.05)',
                    clipPath: 'inset(0 0 2% 0)',
                }}
            ></div>


            {/* Main Content */}
            <div className="relative flex flex-col items-center justify-center min-h-screen gap-6">
                {/* Navigation Buttons for Products */}
                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4">
                    <button
                        className="text-white text-4xl hover:opacity-70 transition"
                        onClick={handlePrevProduct}
                    >
                        &#9664; {/* Left Button */}
                    </button>
                </div>
                <div className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4">
                    <button
                        className="text-white text-4xl hover:opacity-70 transition"
                        onClick={handleNextProduct}
                    >
                        &#9654; {/* Right Button */}
                    </button>
                </div>

                {/* Main Product Box */}
                <div className="flex flex-col lg:flex-row bg-white rounded-lg shadow-lg border border-gray-300 max-w-7xl w-full p-6">
                    {/* Left Section */}
                    <div className="flex flex-col lg:flex-row lg:w-2/3 lg:pr-6 mb-6 lg:mb-0">
                        {/* Constant Profile Image */}
                        <div className="w-full lg:w-2/5 flex justify-center items-center p-4">
                            <img
                                src={product.images[0]} // Constant profile image
                                alt={product.title}
                                className="w-full h-[450px] object-cover rounded-lg shadow-md border-2 border-gray-300"
                            />
                        </div>

                        {/* Product Info */}
                        <div className="flex-1 flex flex-col justify-center p-6">
                            <h1 className="text-4xl font-bold text-gray-800 mb-2">
                                {product.title}
                            </h1>
                            <div className="flex items-center gap-4 mb-1">
                                <span className="text-3xl font-semibold text-gray-900">
                                    {product.discount ? product.discount : product.price}
                                </span>
                                {product.discount && (
                                    <span className="text-xl line-through font-bold text-gray-400">
                                        {product.price}
                                    </span>
                                )}
                            </div>
                            <div className="flex items-center gap-2 mb-6">
                                <p className="text-gray-400 text-md font-bold">Availability:</p>
                                <p className="text-sky-500 text-md font-medium">In Stock</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <p className="text-gray-800 text-lg font-bold">Rating:</p>
                                <div className="flex items-center">
                                    <span className="text-yellow-400 text-2xl">
                                        {'★'.repeat(Math.round(calculateAverageRating()))}
                                        {'☆'.repeat(5 - Math.round(calculateAverageRating()))}
                                    </span>
                                    <span className="text-gray-600 text-sm ml-2">
                                        ({calculateAverageRating()} · {reviews.length} reviews)
                                    </span>
                                </div>
                            </div>
                            <p className="text-gray-800  text-lg font-bold ">
                                Description:<span className="text-gray-500 mt-0 text-lg font-medium"> {product.description}</span>
                            </p>
                            <hr className="my-6 border-t border-gray-300" />
                            <div className="flex gap-4 mb-6">
                                <div className="w-8 h-8 rounded-full bg-red-500"></div>
                                <div className="w-8 h-8 rounded-full bg-blue-500"></div>
                                <div className="w-8 h-8 rounded-full bg-yellow-500"></div>
                                <div className="w-8 h-8 rounded-full bg-green-500"></div>
                            </div>
                            <div className="mt-4 flex gap-4 items-center relative">
                                <div className="relative mt-0 flex gap-6 items-center">
                                    {/* Add to Cart Button */}
                                    <button
                                        onClick={handleAddToCart}
                                        className="bg-sky-500 text-white px-6 py-2 rounded-lg hover:bg-sky-600 transition flex items-center gap-2"
                                    >
                                        <FiShoppingCart size={20} />
                                        <span>{isCartAdded ? "Remove Item" : "Add to Cart"}</span>
                                    </button>

                                    {/* Favorite Button */}
                                    <button
                                        onClick={handleToggleFavorite}
                                        className={`flex items-center text-2xl transition ${isFavorited ? 'text-red-500' : 'text-gray-500'}`}
                                        style={{ transform: isFavorited ? 'scale(1.3)' : 'scale(1)', transition: 'transform 0.3s ease' }}
                                    >
                                        <FiHeart />
                                    </button>

                                    {/* Wishlist Button */}
                                    <button
                                        onClick={handleToggleEye}
                                        className={`flex items-center text-2xl transition ${isEyeOpen ? 'text-green-500' : 'text-gray-500'}`}
                                        style={{ transform: isEyeOpen ? 'scale(1.3)' : 'scale(1)', transition: 'transform 0.3s ease' }}
                                    >
                                        <FiEye />
                                    </button>

                                    {/* Toast Notification */}
                                    {toastMessage && (
                                        <div
                                            className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-black text-white text-sm px-4 py-2 rounded-lg shadow-md transition-opacity duration-300 opacity-100 whitespace-nowrap"
                                            style={{
                                                maxWidth: '200px', // Optional: set max width
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                            }}
                                        >
                                            {toastMessage}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section with Image Navigation */}
                    <div className="relative w-full lg:w-1/3 h-[450px] bg-gray-900 rounded-lg overflow-hidden">
                        <div className="w-full h-full flex justify-center items-center bg-black bg-opacity-40">
                            <img
                                src={product.images[imageIndex]} // Changing background image
                                alt="Product Preview"
                                className="w-full h-full object-cover transition-all duration-1000"
                            />
                        </div>

                        {/* Buttons for Image Navigation */}
                        <div className="absolute inset-0 flex items-center justify-between px-4">
                            <button
                                className="text-white text-3xl hover:opacity-70 transition"
                                onClick={handlePrevImage}
                            >
                                &#9664; {/* Left Image Button */}
                            </button>
                            <button
                                className="text-white text-3xl hover:opacity-70 transition"
                                onClick={handleNextImage}
                            >
                                &#9654; {/* Right Image Button */}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Tabs Section */}
                <div className="bg-white p-6 sm:p-8 md:p-10 shadow-lg rounded-lg w-full max-w-7xl mx-auto h-auto overflow-auto">
                    {/* Tab Navigation */}
                    <div className="flex space-x-4 mb-4 flex-wrap justify-center sm:justify-start">
                        <button
                            onClick={() => setActiveTab('description')}
                            className={`px-4 py-2 text-base font-semibold ${activeTab === 'description' ? 'text-sky-500 border-b-2 border-sky-500' : 'text-gray-500'}`}
                        >
                            Description
                        </button>
                        <button
                            onClick={() => setActiveTab('additional')}
                            className={`px-4 py-2 text-base font-semibold ${activeTab === 'additional' ? 'text-sky-500 border-b-2 border-sky-500' : 'text-gray-500'}`}
                        >
                            Additional Info
                        </button>
                        <button
                            onClick={() => setActiveTab('reviews')}
                            className={`px-4 py-2 text-base font-semibold ${activeTab === 'reviews' ? 'text-sky-500 border-b-2 border-sky-500' : 'text-gray-500'}`}
                        >
                            Reviews
                        </button>
                    </div>

                    {/* Description Tab */}
                    {activeTab === 'description' && (
                        <div className="transition-all duration-700 ease-in-out transform opacity-100">
                            <h3 className="text-xl font-semibold mb-3 text-gray-800">Product Details</h3>
                            <p className="mb-4 text-gray-700 text-sm sm:text-base leading-relaxed">
                                This premium product is crafted with the utmost attention to detail, ensuring durability and style.
                                Whether you're at work or leisure, its versatile design perfectly complements any setting.
                            </p>
                            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                Designed with innovation in mind, this product incorporates cutting-edge technology to meet modern demands.
                            </p>
                        </div>
                    )}

                    {/* Additional Info Tab */}
                    {activeTab === 'additional' && (
                        <div className="transition-all duration-700 ease-in-out transform opacity-100">
                            <h3 className="text-xl font-semibold mb-3 text-gray-800">Additional Information</h3>
                            <ul className="list-disc ml-6 space-y-2 text-gray-700 text-sm sm:text-base">
                                <li><span className="font-semibold">Material:</span> Premium-grade cotton and polyester blend.</li>
                                <li><span className="font-semibold">Sizes:</span> Available in Small, Medium, Large, and Extra-Large.</li>
                                <li><span className="font-semibold">Care Instructions:</span> Machine washable; tumble dry on low heat.</li>
                                <li><span className="font-semibold">Warranty:</span> 1-year limited warranty for quality assurance.</li>
                            </ul>
                        </div>
                    )}

                    {/* Reviews Tab */}
                    {activeTab === 'reviews' && (
                        <div className="transition-all duration-700 ease-in-out transform opacity-100">
                            <div className="flex gap-2 flex-wrap justify-center">
                                {reviews.map((review, index) => (
                                    <div
                                        key={review.id}
                                        className={`flex items-start gap-2 bg-gray-100 p-2 rounded-lg shadow-sm w-[90%] sm:w-[30%] ${index === 2 ? "ml-8" : ""}`}
                                    >
                                        {/* Avatar (Left) */}
                                        <img
                                            src={review.avatar}
                                            alt={review.name}
                                            className="w-6 h-6 sm:w-10 sm:h-10 rounded-full shadow-md"
                                        />

                                        {/* Review Content (Right) */}
                                        <div className="flex-1">
                                            <h4 className="font-semibold text-gray-800 text-[10px] sm:text-sm">{review.name}</h4>
                                            <div className="flex items-center text-yellow-400 text-[8px] sm:text-xs mb-1">
                                                {'★'.repeat(review.stars)}{' '}
                                                {'☆'.repeat(5 - review.stars)}
                                            </div>
                                            <p className="text-gray-600 text-[8px] sm:text-xs">
                                                {review.text}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>


                            <div className="flex flex-wrap gap-2 mt-4 justify-between items-center">
                                {/* Star Rating */}
                                <div className="flex items-center gap-1 w-full sm:w-auto">
                                    <span className="font-semibold text-gray-700 text-[10px] sm:text-sm">Rate:</span>
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <button
                                            key={star}
                                            onClick={() => setNewStars(star)}
                                            className={`text-base sm:text-xl ${newStars >= star ? 'text-yellow-400' : 'text-gray-300'}`}
                                        >
                                            ★
                                        </button>
                                    ))}
                                </div>

                                {/* Input Fields */}
                                <div className="flex flex-wrap gap-1 w-full sm:w-auto">
                                    <input
                                        type="text"
                                        placeholder="Write review..."
                                        value={newReview}
                                        onChange={(e) => setNewReview(e.target.value)}
                                        className="w-full sm:w-auto text-[10px] sm:text-sm border border-gray-300 rounded-lg px-1 sm:px-3 py-1 sm:py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Your name"
                                        value={newName}
                                        onChange={(e) => setNewName(e.target.value)}
                                        className="w-full sm:w-auto text-[10px] sm:text-sm border border-gray-300 rounded-lg px-1 sm:px-3 py-1 sm:py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    onClick={handleAddReview}
                                    className="bg-sky-500 text-white w-full sm:w-auto text-[10px] sm:text-sm px-2 sm:px-4 py-1 sm:py-2 rounded-lg hover:bg-sky-600 transition"
                                >
                                    Submit
                                </button>
                            </div>

                        </div>

                    )}
                </div>

            </div>

        </div>
    );
};

export default ShowProducts;

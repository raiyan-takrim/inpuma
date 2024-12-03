"use client";
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const images = [
    'https://picsum.photos/1200/400?random=1&blur=2',
    'https://picsum.photos/1200/400?random=2&blur=2',
    'https://picsum.photos/1200/400?random=3&blur=2',
    'https://picsum.photos/1200/400?random=4&blur=2',
    'https://picsum.photos/1200/400?random=5&blur=2',
];

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, []);

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        console.log(`Current slide index: ${currentIndex}`);
        console.log(`Current image URL: ${images[currentIndex]}`);
    }, [currentIndex]);

    return (
        <div className="hero relative w-full h-64 sm:h-80 md:h-96 lg:h-[32rem] overflow-hidden">
            <div className="slides relative w-full h-full">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`slide absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <Image src={image} alt={`Slide ${index + 1}`} layout="fill" objectFit="cover" />
                    </div>
                ))}
            </div>
            <div className="dots absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`dot w-3 h-3 bg-white rounded-full cursor-pointer ${index === currentIndex ? 'bg-opacity-100' : 'bg-opacity-50'}`}
                        onClick={() => goToSlide(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Hero;
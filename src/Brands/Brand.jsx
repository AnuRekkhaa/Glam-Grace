import React, { useState } from 'react';
import './Brand.css';

const ImageSlider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
            (prevIndex - 1 + images.length) % images.length
        );
    };

    return (
        <div className="slider">
            <h2>Brands in Trend</h2>
            <p>Indulge in the smooth, opulent touch of pure luxury brands.</p>
            <button className="prev" onClick={prevSlide}>❮</button>
            <div className="slides">
                <img src={images[currentIndex]} alt="slide" />
            </div>
            <button className="next" onClick={nextSlide}>❯</button>
        </div>
    );
};

export default ImageSlider;

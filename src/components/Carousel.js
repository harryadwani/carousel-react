import React, { useState } from 'react';
import '../styles/Carousel.css';

const Carousel = ({ images }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentSlide((currentSlide - 1 + images.length) % images.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    // Create a new array where the current image is moved to the first position
    const rearrangedImages = [
        ...images.slice(currentSlide),
        ...images.slice(0, currentSlide)
    ];

    return (
        <div className="carousel">
            <div className="carousel-container">
                {rearrangedImages.map((image, index) => (
                    <div
                        key={index}
                        className={`carousel-slide ${index === 0 ? 'active' : ''}`}
                    >
                        <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            style={{ width: '100%', height: '100%' }}
                        />
                    </div>
                ))}
            </div>
            <button className="carousel-prev-button" onClick={prevSlide}>
                &lt;
            </button>
            <button className="carousel-next-button" onClick={nextSlide}>
                &gt;
            </button>
            <div className="dot-navigation">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;

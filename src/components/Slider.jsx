import React, {useState, useEffect} from 'react';

const Slider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const autoScroll = () => {
        if (currentIndex === slides.length -1) {
            return setCurrentIndex(0);
        }
        return setCurrentIndex(currentIndex + 1);
    }

    const prevSlide = () => {
    if (currentIndex === 0) {
        setCurrentIndex(slides.length - 3);
    } else {
        setCurrentIndex(currentIndex - 1);
    }
};

    const nextSlide = () => {
    if (currentIndex >= slides.length - 3) {
        setCurrentIndex(0);
    } else {
        setCurrentIndex(currentIndex + 1);
    }
};

    return (
        <div className = "image-slider">
            <ul>
                {slides.map((slide, index) => (
                    <li key = {index} className = {index === currentIndex ? "active" : ""}>
                        <img 
                            src = {slide.src} 
                            alt = {slide.alt} 
                            style = {{
                                transform: `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 2}rem))`
                            }}
                        />
                    </li>
                ))}
            </ul>
            <button 
            className="arrow left" onClick={prevSlide}>‹
            </button>
            <button 
            className="arrow right" onClick={nextSlide}>›
            </button>
        </div>
    );
}

export default Slider;
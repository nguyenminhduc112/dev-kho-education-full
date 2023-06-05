import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './slideShow.scss'
const slideImages = [
    '/images/slide-1.png',
    '/images/slide-2.png',
    '/images/slide-3.png'
];

const Slideshow = () => {
    return (
        <div className="slide-container">
            <Slide>
                {slideImages.map((each, index) => (
                    <div key={index} className="each-slide">
                        <div style={{ backgroundImage: `url(${each})`, backgroundSize: 'contain', height: '300px', borderRadius: '20px' }}>
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    );
};

export default Slideshow;
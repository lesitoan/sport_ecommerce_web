import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '28rem',
};
const slideImages = ['/slideShows/banner-1.webp', '/slideShows/banner-2.webp', '/slideShows/banner-3.webp'];

const SlideShowImage = () => {
    return (
        <div className="slide-container">
            <Slide>
                {slideImages.map((slideImage, index) => (
                    <div key={index}>
                        <div style={{ ...divStyle, backgroundImage: `url("${slideImage}")` }}></div>
                    </div>
                ))}
            </Slide>
        </div>
    );
};

export default SlideShowImage;

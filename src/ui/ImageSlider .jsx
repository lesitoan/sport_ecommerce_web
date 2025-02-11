import { useEffect, useRef } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const ImageSlider = ({ images, show, onShow }) => {
    const imagesRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (imagesRef.current && !imagesRef.current.contains(event.target)) {
                onShow(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const newImages = images.map((image) => ({
        original: image,
        thumbnail: image,
    }));

    return (
        <div
            className={`${
                !show && 'hidden'
            } text-sm sm:text-base fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full hover:text-black lowercase bg-black/60`}
        >
            <div className="w-full md:w-2/5" ref={imagesRef}>
                <ImageGallery
                    items={newImages}
                    showFullscreenButton={true} // Nút phóng to
                    showPlayButton={false} // Bỏ chế độ tự động chạy
                />
            </div>
        </div>
    );
};

export default ImageSlider;

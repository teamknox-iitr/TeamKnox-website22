import React from "react";
import ImageGallery from 'react-image-gallery';
import './gallery.css';

const Gallery = () => {
    const images = [
        {
          original: 'https://picsum.photos/id/1018/1000/600/',
        },
        {
          original: 'https://picsum.photos/id/1015/1000/600/',
        }
    ];
    return (
        <div className="gallery">
            <ImageGallery items={images} />
        </div>
    )
}

export default Gallery;
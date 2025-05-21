import React, { useState } from 'react';

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Array de imágenes de Brandon Lee
const images = [
  {
    src: `/images/imagen5.jpg`,
    alt: 'Brandon Lee en El Cuervo',
    caption: 'Como Eric Draven en "El Cuervo" (1994)'
  },
  {
    src: `/images/imagen6.jpg`,
    alt: 'Brandon Lee en Rapid Fire',
    caption: 'El Cuervo (1994)'
  },
  {
    src: `/images/imagen7.jpg`,
    alt: 'Brandon Lee entrenando',
    caption: 'Todo un angel de la muerte'
  },
  {
    src: `/images/imagen8.jpg`,
    alt: 'Brandon y Bruce Lee',
    caption: ' Todo un papi'
  }
];

  const nextImage = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="Galeria" className="gallery-section">
      <div className="container">
        <h2>Galería</h2>
        
        <div className="gallery-container">
          <div className="main-image-container">
            <button className="nav-btn prev-btn" onClick={prevImage}>
              &lt;
            </button>
            
            <div className="main-image-wrapper">
              <img 
                src={images[activeIndex].src} 
                alt={images[activeIndex].alt}
                className="main-image"
              />
              <p className="image-caption">{images[activeIndex].caption}</p>
            </div>
            
            <button className="nav-btn next-btn" onClick={nextImage}>
              &gt;
            </button>
          </div>
          
          <div className="thumbnail-container">
            {images.map((image, index) => (
              <div 
                key={index}
                className={`thumbnail ${index === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="thumbnail-image"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
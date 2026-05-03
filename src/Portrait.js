import React, { useState, useEffect } from 'react';
const images = [
  new URL('./Assets/Images/Portrait/portrait-1.jpg', import.meta.url).href,
  new URL('./Assets/Images/Portrait/portrait-2.jpg', import.meta.url).href,
  new URL('./Assets/Images/Portrait/portrait-3.jpg', import.meta.url).href,
];

const Portrait = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="portrait-wrap">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Portrait ${index + 1}`}
          className={index === currentIndex ? 'active' : ''}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            opacity: index === currentIndex ? 1 : 0,
            transition: 'opacity 1.5s ease-in-out',
            objectFit: 'cover',
            objectPosition: index === 0 ? 'calc(50% - 20px) 5%' : 
                           index === 1 ? 'center 20%' :
                           index === 2 ? 'center 15%' : 'center 5%'
          }}
        />
      ))}
      <div className="portrait-fade"></div>
    </div>
  );
};

export default Portrait;

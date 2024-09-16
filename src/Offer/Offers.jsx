import React, { useState } from 'react';
import './Offers.css'; 
import video1 from '../assets/makeup.mp4'
import video2 from '../assets/female facepack.mp4'
import video3 from '../assets/body lotion.mp4'
import video4 from '../assets/powder.mp4'
import video5 from '../assets/perfume.mp4'

const videos = [
  { id: 1, title: 'Makeup Offers', url: video1, content:'Buy Makeup items @50% off'},
  { id: 2, title: 'Skincare Offers', url: video2, content:'Buy Skincare @30% off'},
  { id: 3, title: 'Bodycare Offers', url: video3, content:'Buy Bodycare @20% off'},
  { id: 4, title: 'Cosmetics & Hair care', url: video4, content:'Buy any Branded cosmetics @15% off'},
  { id: 5, title: 'Perfume Offers', url: video5, content:'Buy Branded perfumes @50% off'},
];

const Offers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
  };

  return (
    <div className="card-slider">
      <h2>Offers in trend</h2>
      <p>Here comes the most trendy and popular offers in Cosmetics.</p>
      <button className="prevslide" onClick={prevSlide}>❮</button>
      <div className="sliders">
        <div
          className="videos"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {videos.map((video) => (
            <div key={video.id} className="videocard">
              <video autoPlay width="100%">
                <source src={video.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <h3>{video.title}</h3>
              <p>{video.content}</p>
              <p>{}</p>
              <div className="buy">
                <a href="/Offers">Buy Now</a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="nextslide" onClick={nextSlide}>❯</button>
      
    </div>
  );
};

export default Offers;

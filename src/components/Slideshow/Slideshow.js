import React from 'react';
import styles from './Slideshow.module.css';
import { useState } from "react";
function Slideshow(props) {
  const [currentImageId, setCurrentImageId] = useState(0);
  const images = props.images;

  const showPreviousImage = () => {
    if (currentImageId === 0) {
      setCurrentImageId(images.length - 1);
    } else {
      setCurrentImageId(currentImageId - 1);
    }
  };

  const showNextImage = () => {
    if (currentImageId === images.length - 1) {
      setCurrentImageId(0);
    } else {
      setCurrentImageId(currentImageId + 1);
    }
  };

  const currentImageUrl = images[currentImageId];
  const counter = `${currentImageId + 1}/${images.length}`;

  return (
    <div className={styles.slideshow} style={{ backgroundImage: `url(${currentImageUrl})` }}>
      {images.length > 1 && (
        <>
          <span className={styles.arrowLeft} onClick={showPreviousImage}></span>
          <span className={styles.arrowRight} onClick={showNextImage}></span>
          <span className={styles.counter}>{counter}</span>
        </>
      )}
    </div>
  );
}

export default Slideshow;
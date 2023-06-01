
import React from 'react';
import styles from './Housing.module.css';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import Spoiler from '../Spoiler/Spoiler';
import Slideshow from '../Slideshow/Slideshow';
import Stars from '../Stars/Stars';


function Housing() {
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get("id");

    if (id) {
      fetch("../../../logements.json")
        .then((response) => response.json())
        .then((data) => {
          const item = data.find((obj) => obj.id === id);
          if (item === undefined) {
            navigate('/404');
          } else {
            setData(item);
          }
        })
        .catch((error) => console.error(error));
    }
  }, [navigate]);

  if (!data) {
    return (<div>erreur db</div>);
  }

  const pinkStarsNumber = data.rating;
  const greyStarsNumber = 5 - data.rating;

  return (
    <div className={styles.housing}>
      <Slideshow images={data.pictures} />
      <div className={styles.housingDetails}>
        <span className={styles.housingName}>{data.title}</span>
        <span className={styles.housingLocation}>{data.location}</span>

        {data.tags.map((tag, index) => (
          <span className={styles.housingTags} key={index}>{tag}</span>
        ))}
      </div>
      <span className={styles.housingOwner}>
        <span className={styles.housingOwnerID}>
          <span className={styles.housingOwnerName}>{data.host.name}</span>
          <span className={styles.housingOwnerPicture}><img alt={data.host.name} src={data.host.picture}></img></span>
        </span>
        <span className={styles.housingOwnerRating}>
          <Stars count={pinkStarsNumber} color="#FF6060" />
          <Stars count={greyStarsNumber} color="#E3E3E3" />
        </span>
      </span>
      <div className={styles.spoilerContainer}>
        <Spoiler size="40%" name="Description">
          {data.description}
        </Spoiler>
        <Spoiler size="40%" name="Equipements">
          {data.equipments}
        </Spoiler>

      </div>
    </div>);
}


export default Housing;
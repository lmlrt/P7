import React, { useState, useEffect } from 'react';
import styles from './Home.module.css';
import Banner from '../Banner/Banner';
import Thumb from '../Thumb/Thumb';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("../../../../logements.json")  // Update the fetch URL to the correct path
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <Banner type="banner1" text="Chez vous, partout et ailleurs" />
      <div className={styles.gallery}>
        {data.map((item) => (
          <Thumb key={item.id} img={item.cover} link={item.id} name={item.title} />
        ))}
      </div>
    </div>
  );
}

export default Home;
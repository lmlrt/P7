import React from 'react';
import styles from './Banner.module.css';
import Banner1Image from '../../img/banner1.webp';
import Banner2Image from '../../img/banner2.webp';

function Banner(props) {
  const type = props.type;
  let bg;
  switch (type) {
    case "banner2":
      bg = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${Banner2Image}')`;
      break;

    default:
      bg = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${Banner1Image}')`;
      break;
  }
  return (
    <div
      className={styles.banner}
      style={{ backgroundImage: bg }}
    >
      <span className={styles.bannerText}>{props.text}</span>
    </div>
  );
}

export default Banner;
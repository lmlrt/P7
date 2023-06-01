import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Thumb.module.css';

function Thumb(props) {
  let url = "/housing?id=" + props.link;
    let name = props.name;
    let img = props.img;

    const thumbStyle = {
        background: `linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.5)), url(${img}), #FF6060`,
        backgroundSize: "100% 100%"
      };
  return (
    <Link to={url} style={thumbStyle} className={styles.thumb}>
      <span className={styles.label}>{name}</span>
    </Link>
  );
}

export default Thumb;
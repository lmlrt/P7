import React from 'react';
import { Link } from "react-router-dom";
import styles from './NotFound.module.css';


function NotFound() {
    return (<div className={styles.container}>
      <span className={styles.error_type}>404</span>
      <span className={styles.error_desc}>Oups! La page que vous demandez n'existe pas.</span>
      <span className={styles.homelink}><Link to="/">Retourner sur la page d’accueil</Link></span>
    </div>);
  }
  
export default NotFound;
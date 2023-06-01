import React from 'react';
import styles from './Footer.module.css';
import { ReactComponent as Logo } from '../../img/logo.svg';

function Footer() {
    return (<div className={styles.footer}>
      <Logo className={styles.logo} />
      <span className={styles.copyright}>© 2020 Kasa. All rights reserved</span>
    </div>);
}

export default Footer;
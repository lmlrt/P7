import React from 'react';
import styles from './Layout.module.css';
import stylesLogo from '../Logo/Logo.module.css';
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from '../../img/logo.svg';
import Footer from '../Footer/Footer';

function Layout(props) {
    return (
      <div>
        <nav id={styles.main_navigation}>
          <Logo className={stylesLogo.logo} />
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/about">A Propos</Link>
            </li>
          </ul>
        </nav>
        <main>{props.children}</main>
        <Footer />
      </div>
    );
  }

export default Layout;
import React from 'react';
import styles from './Spoiler.module.css';
import { ReactComponent as SpoilerArrow } from '../../img/spoiler_arrow.svg';

function Spoiler({ name, size, children }) {
    let content;
  
    if (typeof children === 'string') {
      content = <ol>{children}</ol>;
    } else if (Array.isArray(children)) {
      content = children.map((item, index) => <li key={index}>{item}</li>);
    } else {
      return -1;
    }
    return (
        <details style={{ width: size }} className={styles.spoil}>
            <summary>{name}<SpoilerArrow /></summary>
            <ul>
          {content}
        </ul>
        </details>
    )
  }
export default Spoiler;
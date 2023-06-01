import React from 'react';
import { ReactComponent as Star } from '../../img/star.svg';

function Stars({ count, color }) {
  const starArray = Array.from({ length: count }, (_, index) => (
    <Star key={index} fill={color} />
  ));

  return <span>{starArray}</span>;
}

export default Stars;
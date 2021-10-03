import React, { FC } from 'react';

import classes from './PersonCard.module.css';
import { PersonCardProps } from './types';

const PersonCard: FC<PersonCardProps> = ({ image, alt, width, height }) => {
  return (
    <div className={classes.card}>
      <img src={image} alt={alt} style={{ width, height }} />
    </div>
  );
};

export default PersonCard;

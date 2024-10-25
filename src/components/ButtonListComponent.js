import React from 'react';
import { BUTTON_TITLES } from '../utils/constants';
import ButtonComponent from './ButtonComponent';

const ButtonListComponent = () => {
  return (
    <div className="flex">
      {BUTTON_TITLES.map((title) => (
        <ButtonComponent name={title} key={title} />
      ))}
    </div>
  );
};

export default ButtonListComponent;

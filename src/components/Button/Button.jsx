import React from 'react';
import './Button.scss';

const Button = ({ state, value, turnOn }) => {
  return (
    <button
      onClick={() => turnOn(value)}
      className={`button material-symbols-outlined ${(state
        ? 'active'
        : ''
      ).trim()}`}
    >
      {value}
    </button>
  );
};

export default Button;

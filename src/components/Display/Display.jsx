import React from 'react';
import './Display.scss';

const Display = ({ text, state }) => {
  return (
    <>
      <span
        value={text}
        type='text'
        id='display'
        className={`display ${(!state ? 'off' : '').trim()}`}
      >
        {text}
      </span>
    </>
  );
};

export default Display;

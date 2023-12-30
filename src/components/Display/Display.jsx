import React from 'react';
import './Display.scss';

const Display = ({ text, state }) => {
  return (
    <>
      <input
        readOnly
        value={text}
        type='text'
        id='display'
        className={`display ${(!state ? 'off' : '').trim()}`}
      />
    </>
  );
};

export default Display;

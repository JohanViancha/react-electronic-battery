import React from 'react';
import './Key.scss';

const Key = ({ value, onPlay }) => {
  return (
    <>
      <div
        className='drum-pad'
        onClick={(e) => onPlay(value)}
        id={value.toLowerCase()}
      >
        {value}
        <audio
          src={`../../src/assets/audio/${value}.mp3`}
          className='clip'
          id={value}
        >
        </audio>
      </div>
    </>
  );
};

export default Key;

import React from 'react';
import './Key.scss';

const Key = ({ keyBoard, onPlay }) => {
  return (
    <>
      <div
        className='drum-pad'  
        onClick={(e) => onPlay(keyBoard.value)}
        id={keyBoard.value.toLowerCase()}
      >
        {keyBoard.value}
        <audio
          src={`https://s3.amazonaws.com/freecodecamp/drums/${keyBoard.audio}.mp3`}
          className='clip'
          id={keyBoard.value}
        >
        </audio>
      </div>
    </>
  );
};

export default Key;

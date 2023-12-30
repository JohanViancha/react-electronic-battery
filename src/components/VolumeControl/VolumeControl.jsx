import React from 'react';
import './VolumeControl.scss';

const VolumeControl = ({ changeVolume, volume, isOn, sound }) => {
  return (
    <>
      <span className='label'>Volumen</span>
      <input
        disabled={!sound}
        type='range'
        className='volume'
        onChange={changeVolume}
        value={volume}
      />
    </>
  );
};

export default VolumeControl;

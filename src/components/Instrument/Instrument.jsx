import React, { useEffect, useState } from 'react';
import { useVolumenIcon } from '../../CustomHooks/useVolumeIcon';
import { keyList } from '../../assets/keyList';
import Button from '../Button/Button';
import Display from '../Display/Display';
import Key from '../Key/Key';
import VolumeControl from '../VolumeControl/VolumeControl';
import './Instrument.scss';

const Instrument = () => {
  const [text, setText] = useState('');
  const [volume, setVolume] = useState(0.5);
  const [isOn, setOn] = useState(true);
  const [sound, setSound] = useState(true);
  const [volumenIcon, changeIcon] = useVolumenIcon();

  const handleUserKeyPress = (event) => {
    const { key } = event;
    onPlay(key.toUpperCase());
  };

  useEffect(() => {
    window.addEventListener('keydown', handleUserKeyPress);
    return () => {
      window.removeEventListener('keydown', handleUserKeyPress);
    };
  }, [handleUserKeyPress]);

  const onPlay = (value) => {
    const keyFound = keyList.find((key) => key.value === value);
    if (!keyFound) {
      return;
    }

    if (sound && isOn) {
      const audio = document.getElementById(value);
      audio.volume = volume;
      audio.play();
    }
    if (isOn) {
      setText(keyFound.name);
    }
  };

  const turnBattery = () => {
    setOn(!isOn);
    setText('');
    if (!isOn) {
      setSound(true);

      return;
    }
    changeIcon(1);
    setSound(false);
  };

  const muteBattery = () => {
    if (isOn) {
      changeIcon(!sound);
      setSound(!sound);
    }
  };

  const changeVolume = (e) => {
    setVolume(e.target.value / 100);
  };

  return (
    <div
      id='drum-machine'
      className='drum-machine'
    >
      <div className='controls'>
        <Display
          state={isOn}
          text={text}
        />
        <div className='controls-actions'>
          <div className='volume'>
            <VolumeControl
              changeVolume={changeVolume}
              value={volume}
              sound={sound}
            />
          </div>
          <div className='buttons'>
            <Button
              value='power_settings_new'
              state={isOn}
              turnOn={turnBattery}
            />
            <Button
              value={volumenIcon}
              state={sound}
              turnOn={muteBattery}
            />
          </div>
        </div>
      </div>
      <div className='box__keys'>
        {keyList.map((key) => (
          <Key
            key={key.value}
            keyBoard={key}
            onPlay={onPlay}
          />
        ))}
      </div>
    </div>
  );
};

export default Instrument;

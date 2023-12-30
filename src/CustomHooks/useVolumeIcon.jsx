import { useState } from 'react';

const useVolumenIcon = () => {
  const [volumeIcon, setVolumeIcon] = useState('volume_off');

  const volumenIcons = ['volume_up', 'volume_off'];

  const changeIcon = (value) => {
    setVolumeIcon(volumenIcons[Number(value)]);
  };

  return [volumeIcon, changeIcon];
};

export { useVolumenIcon };

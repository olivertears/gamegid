import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Img, Wrap } from './GameImage.styles';
import { selectedGameSelector } from '../../store/slices/game/selectors';

const GameImage: FC = () => {
  const game = useSelector(selectedGameSelector);

  return (
    <Wrap>
      <Img src={game.background_image} />
    </Wrap>
  );
};

export default GameImage;

import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { selectedGameSelector } from '../../store/reducers/game/selectors';
import { Img, Wrap } from './GameImage.styles';

const GameImage: FC = () => {
  const game = useSelector(selectedGameSelector);

  return (
    <Wrap>
      <Img src={game.background_image} />
    </Wrap>
  );
};

export default GameImage;

import React, { FC } from 'react';
import GameImage from '../GameImage/GameImage';
import GameDetails from '../GameDetails/GameDetails';
import { Wrap, wrapSX } from './GameInfoWrap.styles';

const GameInfoWrap: FC = () => {
  return (
    <Wrap sx={wrapSX}>
      <GameImage />
      <GameDetails />
    </Wrap>
  );
};

export default GameInfoWrap;

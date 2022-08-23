import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { gamesSelector } from '../../store/reducers/game/selectors';
import GameCard from '../GameCard/GameCard';
import { wrapSX, Wrap } from './GamesCatalog.styles';

const GamesCatalog: FC = () => {
  const games = useSelector(gamesSelector);

  return (
    <Wrap sx={wrapSX}>
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </Wrap>
  );
};

export default GamesCatalog;

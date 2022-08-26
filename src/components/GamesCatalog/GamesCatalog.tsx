import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import GameCard from '../GameCard/GameCard';
import { useInView } from 'react-hook-inview';
import { useThunkDispatch } from '../../hooks/useThunkDispatch';
import { Masonry } from '@mui/lab';
import { getPlatformsForRequest } from '../../utils/getPlatformsForRequest';
import { Container } from '@mui/material';
import { columns } from './GamesCatalog.types';
import { masonrySX } from './GamesCatalog.styles';
import {
  catalogOrderingSelector,
  catalogPageSelector,
  catalogPlatformsSelector,
  catalogSearchSelector,
} from '../../store/slices/catalog/selectors';
import { gamesSelector } from '../../store/slices/game/selectors';
import { getLazyGames } from '../../store/slices/game/async-actions';

const GamesCatalog: FC = () => {
  const page = useSelector(catalogPageSelector);
  const ordering = useSelector(catalogOrderingSelector);
  const platforms = useSelector(catalogPlatformsSelector);
  const search = useSelector(catalogSearchSelector);
  const games = useSelector(gamesSelector);
  const [refLastGameCard, inViewLastGameCard] = useInView();
  const dispatch = useThunkDispatch();

  useEffect(() => {
    if (inViewLastGameCard) {
      dispatch(
        getLazyGames({
          page: page + 1,
          ordering: ordering.value,
          search,
          platforms: getPlatformsForRequest(platforms),
        }),
      );
    }
  }, [inViewLastGameCard]);

  const getRef = (idx: number) => (idx === games.length - 1 ? refLastGameCard : null);

  return (
    <Container>
      <Masonry columns={columns} spacing={3} sx={masonrySX}>
        {games.length
          ? games.map((game, idx) => (
              <div ref={getRef(idx)} key={game.id}>
                <GameCard game={game} />
              </div>
            ))
          : []}
      </Masonry>
    </Container>
  );
};

export default GamesCatalog;

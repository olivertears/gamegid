import React, { FC } from 'react';
import { Card, CardMedia, Container, Rating, Typography } from '@mui/material';
import { GameCardProps } from './GameCard.types';
import { useRouter } from 'next/router';
import { useThunkDispatch } from '../../hooks/useThunkDispatch';
import { getFullGameInfo } from '../../store/reducers/game/action-creators';
import { cardSX, containerSX } from './GameCard.styles';

const GameCard: FC<GameCardProps> = ({ game }) => {
  const { background_image, name, rating, released, slug } = game;
  const dispatch = useThunkDispatch();
  const router = useRouter();

  const redirect = () => {
    dispatch(getFullGameInfo(game)).then(() => router.push('/game/' + slug));
  };

  return (
    <Card onClick={redirect} sx={cardSX}>
      <CardMedia component="img" max-width="100%" image={background_image} />
      <Container sx={containerSX}>
        <Typography fontSize={'24px'} fontWeight={'600'}>
          {name}
        </Typography>
        <Typography fontSize={'20px'} fontWeight={'600'} margin={'10px 0'}>
          {released}
        </Typography>
        <Rating value={rating} readOnly />
      </Container>
    </Card>
  );
};

export default GameCard;

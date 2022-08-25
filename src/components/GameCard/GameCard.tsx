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
    router.push('/game/' + slug).then(() => dispatch(getFullGameInfo(game)));
  };

  return (
    <Card onClick={redirect} sx={cardSX}>
      <CardMedia component="img" max-width="100%" image={background_image} />
      <Container sx={containerSX}>
        <Typography variant="h5">{name}</Typography>
        <Typography variant="body1">{released}</Typography>
        <Rating value={rating} readOnly precision={0.5} />
      </Container>
    </Card>
  );
};

export default GameCard;

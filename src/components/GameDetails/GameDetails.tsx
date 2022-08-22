import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectedGameSelector } from '../../store/reducers/game/selectors';
import { Box, Container, IconButton, Link, Rating, Typography } from '@mui/material';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { boxSX, infoSX, Title, useArrowStyles } from './GameDetails.styles';

const GameDetails: FC = () => {
  const cl = useArrowStyles();
  const game = useSelector(selectedGameSelector);
  const [descriptionOpen, setDescriptionOpen] = useState<boolean>(true);

  function createMarkup() {
    return { __html: game.details.description };
  }

  const handleOpenDescription = () => setDescriptionOpen(!descriptionOpen);

  return (
    <Container>
      <Typography variant={'h4'}>{game.name}</Typography>
      <Rating value={game.rating} readOnly />

      {game.released && (
        <>
          <Title>Released: </Title>
          <Typography sx={infoSX}>{game.released}</Typography>
        </>
      )}

      {game.details.website && (
        <>
          <Title>Website: </Title>
          <Link href={game.details.website} target="_blank" sx={infoSX}>
            {game.details.website}
          </Link>
        </>
      )}

      <Box sx={boxSX}>
        <Title>Description</Title>
        <IconButton>
          <ArrowDropUpIcon
            className={`${cl.arrow} ${descriptionOpen && cl.rotatedArrow}`}
            onClick={handleOpenDescription}
          />
        </IconButton>
      </Box>
      {descriptionOpen && <Box dangerouslySetInnerHTML={createMarkup()} />}
    </Container>
  );
};

export default GameDetails;

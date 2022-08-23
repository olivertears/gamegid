import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectedGameSelector } from '../../store/reducers/game/selectors';
import { Box, Container, IconButton, Link, Rating, Typography } from '@mui/material';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { arrowSX, boxSX, descriptionSX, infoSX, Title } from './GameDetails.styles';

const GameDetails: FC = () => {
  const game = useSelector(selectedGameSelector);
  const [descriptionOpen, setDescriptionOpen] = useState<boolean>(true);

  function createMarkup() {
    return { __html: game.details?.description };
  }

  const handleOpenDescription = () => setDescriptionOpen(!descriptionOpen);

  return (
    <Container>
      <Typography variant={'h4'}>{game.name}</Typography>
      <Rating value={game.rating ? game.rating : 0} readOnly precision={0.5} />

      {game.released && (
        <>
          <Title>Released: </Title>
          <Typography sx={infoSX}>{game.released}</Typography>
        </>
      )}

      {game.details?.website && (
        <>
          <Title>Website: </Title>
          <Link href={game.details.website} target="_blank" sx={infoSX}>
            {game.details.website}
          </Link>
        </>
      )}

      <Box sx={boxSX}>
        <Title>Description</Title>
        <IconButton onClick={handleOpenDescription}>
          <ArrowDropUpIcon sx={arrowSX(descriptionOpen)} />
        </IconButton>
      </Box>
      {descriptionOpen && <Box dangerouslySetInnerHTML={createMarkup()} sx={descriptionSX} />}
    </Container>
  );
};

export default GameDetails;

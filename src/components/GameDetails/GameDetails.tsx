import React, { FC, useLayoutEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectedGameSelector } from '../../store/reducers/game/selectors';
import { Box, Container, Link, Rating, Typography } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { arrowSX, boxSX, descriptionSX, infoSX, Title } from './GameDetails.styles';

const GameDetails: FC = () => {
  const game = useSelector(selectedGameSelector);
  const [descriptionOpen, setDescriptionOpen] = useState<boolean>(true);

  useLayoutEffect(() => {
    const descriptionWrap = document.getElementById('descriptionWrap');
    if (descriptionWrap) {
      descriptionWrap.innerHTML = game.details.description;
    }
  }, [descriptionOpen]);

  const handleOpenDescription = () => setDescriptionOpen(!descriptionOpen);

  return (
    <Container>
      <Typography fontSize="24px" fontWeight="600" marginBottom="15px">
        {game.name}
      </Typography>
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
        {descriptionOpen ? (
          <ArrowDropUpIcon sx={arrowSX} onClick={handleOpenDescription} />
        ) : (
          <ArrowDropDownIcon sx={arrowSX} onClick={handleOpenDescription} />
        )}
      </Box>
      {descriptionOpen && <Box id="descriptionWrap" sx={descriptionSX} />}
    </Container>
  );
};

export default GameDetails;

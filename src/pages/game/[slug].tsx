import React from 'react';
import { Container } from '@mui/material';
import GameInfoWrap from '../../components/GameInfoWrap/GameInfoWrap';
import ScreenshotSlider from '../../components/ScreenshotSlider/ScreenshotSlider';
import { useSelector } from 'react-redux';
import { selectedGameSelector } from '../../store/reducers/game/selectors';

const GamePage = () => {
  const game = useSelector(selectedGameSelector);

  return (
    <Container>
      <GameInfoWrap />
      {!!game.screenshots.length && <ScreenshotSlider />}
    </Container>
  );
};

export default GamePage;

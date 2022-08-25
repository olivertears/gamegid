import React from 'react';
import { Container } from '@mui/material';
import GameInfoWrap from '../../components/GameInfoWrap/GameInfoWrap';
import ScreenshotSlider from '../../components/ScreenshotSlider/ScreenshotSlider';
import { useSelector } from 'react-redux';
import { selectedGameSelector } from '../../store/reducers/game/selectors';
import { appLoadingSelector } from '../../store/reducers/app/selectors';
import Loader from '../../components/Loader/Loader';
import Layout from '../../components/Layout/Layout';

const GamePage = () => {
  const appLoading = useSelector(appLoadingSelector);
  const game = useSelector(selectedGameSelector);

  return (
    <Layout>
      {appLoading ? (
        <Loader />
      ) : (
        <Container>
          <GameInfoWrap />
          {!!game.screenshots?.length && <ScreenshotSlider />}
        </Container>
      )}
    </Layout>
  );
};

export default GamePage;

import React from 'react';
import { Container } from '@mui/material';
import GameInfoWrap from '../../components/GameInfoWrap/GameInfoWrap';
import ScreenshotSlider from '../../components/ScreenshotSlider/ScreenshotSlider';
import { useSelector } from 'react-redux';
import Loader from '../../components/Loader/Loader';
import Layout from '../../components/Layout/Layout';
import { appLoadingSelector } from '../../store/slices/app/selectors';
import { selectedGameSelector } from '../../store/slices/game/selectors';
import { AppDispatch, wrapper } from '../../store/store';
import { getFullGameInfo } from '../../store/slices/game/async-actions';

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

export const getServerSideProps = wrapper.getServerSideProps((store) => async (ctx) => {
  const dispatch = store.dispatch as AppDispatch;
  await dispatch(await getFullGameInfo(ctx.params?.slug as string));
  return { props: {} };
});

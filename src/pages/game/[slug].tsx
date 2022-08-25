import React, {useEffect, useRef} from 'react';
import {Container} from '@mui/material';
import GameInfoWrap from '../../components/GameInfoWrap/GameInfoWrap';
import ScreenshotSlider from '../../components/ScreenshotSlider/ScreenshotSlider';
import {useDispatch, useSelector} from 'react-redux';
import {selectedGameSelector} from '../../store/reducers/game/selectors';
import {setSelectedGame} from '../../store/reducers/game/action-creators';
import {IFullGame} from '../../models/IGame';
import {appLoadingSelector} from '../../store/reducers/app/selectors';
import Loader from '../../components/Loader/Loader';
import Layout from '../../components/Layout/Layout';

const GamePage = () => {
  const appLoading = useSelector(appLoadingSelector);
  const game = useSelector(selectedGameSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    const selectedGameFromLS = localStorage.getItem('selectedGame');
    if (selectedGameFromLS) {
      dispatch(setSelectedGame(JSON.parse(selectedGameFromLS) as IFullGame));
    }
  }, []);

  return (
      <Layout>
        {appLoading ? <Loader/> : <Container>
          <GameInfoWrap/>
          {!!game.screenshots?.length && <ScreenshotSlider/>}
        </Container>}

      </Layout>
  );
};

export default GamePage;

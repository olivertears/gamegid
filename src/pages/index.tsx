import type { NextPage } from 'next';
import Layout from '../components/Layout/Layout';
import { useEffect } from 'react';
import { useThunkDispatch } from '../hooks/useThunkDispatch';
import { getGames } from '../store/reducers/game/action-creators';
import GamesCatalog from '../components/GamesCatalog/GamesCatalog';
import { ThemeProvider } from '@mui/material';
import { theme } from '../theme';
import { useSelector } from 'react-redux';
import { gameLoadingSelector } from '../store/reducers/game/selectors';
import Loader from '../components/Loader/Loader';
import {
  catalogOrderingSelector,
  catalogPlatformsSelector,
  catalogSearchSelector,
} from '../store/reducers/catalog/selectors';
import { getPlatformsForRequest } from '../utils/getPlatformsForRequest';
import Header from '../components/Header/Header';
import { appLoadingSelector } from '../store/reducers/app/selectors';
import { timeout } from '../utils/timeout';

const Home: NextPage = () => {
  const appLoading = useSelector(appLoadingSelector);
  const gameLoading = useSelector(gameLoadingSelector);
  const ordering = useSelector(catalogOrderingSelector);
  const platforms = useSelector(catalogPlatformsSelector);
  const search = useSelector(catalogSearchSelector);
  const dispatch = useThunkDispatch();

  useEffect(() => {
    let isCancelled = false;

    const fetchGames = async () => {
      await timeout(500);
      if (!isCancelled) {
        dispatch(
          getGames({
            ordering: ordering.value,
            search,
            platforms: getPlatformsForRequest(platforms),
          }),
        );
      }
    };

    fetchGames();

    return () => {
      isCancelled = true;
    };
  }, [ordering, platforms, search]);

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Header />
        {appLoading ? <Loader /> : <GamesCatalog />}
        {gameLoading && <Loader />}
      </Layout>
    </ThemeProvider>
  );
};

export default Home;

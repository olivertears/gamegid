import type { NextPage } from 'next';
import Layout from '../components/Layout/Layout';
import { useEffect, useRef } from 'react';
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

const Home: NextPage = () => {
  const appLoading = useSelector(appLoadingSelector);
  const gameLoading = useSelector(gameLoadingSelector);
  const ordering = useSelector(catalogOrderingSelector);
  const platforms = useSelector(catalogPlatformsSelector);
  const search = useSelector(catalogSearchSelector);
  const dispatch = useThunkDispatch();
  const firstRender = useRef<boolean>(true);

  useEffect(() => {
    firstRender.current
      ? (firstRender.current = false)
      : dispatch(
          getGames({
            ordering: ordering.value,
            search,
            platforms: getPlatformsForRequest(platforms),
          }),
        );
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

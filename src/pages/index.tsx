import type { NextPage } from 'next';
import Layout from '../components/Layout/Layout';
import { useCallback, useEffect } from 'react';
import { useThunkDispatch } from '../hooks/useThunkDispatch';
import GamesCatalog from '../components/GamesCatalog/GamesCatalog';
import { ThemeProvider, debounce } from '@mui/material';
import { theme } from '../theme';
import { useSelector } from 'react-redux';
import Loader from '../components/Loader/Loader';
import { getPlatformsForRequest } from '../utils/getPlatformsForRequest';
import Header from '../components/Header/Header';
import { parseCookies } from 'nookies';
import {
  catalogOrderingSelector,
  catalogPlatformsSelector,
  catalogSearchSelector,
} from '../store/slices/catalog/selectors';
import { catalogSlice } from '../store/slices/catalog/';
import { IOrdering } from '../models/IOrdering';
import { wrapper } from '../store/store';
import { appLoadingSelector } from '../store/slices/app/selectors';
import { gameLoadingSelector } from '../store/slices/game/selectors';
import { getGames } from '../store/slices/game/async-actions';
import { orderList } from '../consts';

const Home: NextPage = () => {
  const appLoading = useSelector(appLoadingSelector);
  const gameLoading = useSelector(gameLoadingSelector);
  const ordering = useSelector(catalogOrderingSelector);
  const platforms = useSelector(catalogPlatformsSelector);
  const search = useSelector(catalogSearchSelector);
  const dispatch = useThunkDispatch();

  const fetchGames = () => {
    dispatch(
      getGames({
        ordering: ordering.value,
        search,
        platforms: getPlatformsForRequest(platforms),
      }),
    );
  };
  const debouncedFetchGames = useCallback(debounce(fetchGames, 500), []);

  useEffect(() => {
    debouncedFetchGames();
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

export const getServerSideProps = wrapper.getServerSideProps((store) => async (ctx) => {
  const { ordering, search, platforms } = parseCookies(ctx);
  const { setOrdering, setPlatforms, setSearch } = catalogSlice.actions;
  store.dispatch(setOrdering((ordering ? JSON.parse(ordering) : orderList[0]) as IOrdering));
  store.dispatch(setSearch(search ? JSON.parse(search || '') : ''));
  store.dispatch(setPlatforms((platforms ? JSON.parse(platforms || '') : []) as string[]));
  return { props: {} };
});

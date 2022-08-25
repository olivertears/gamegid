import type { NextPage } from 'next';
import Search from '../components/Search/Search';
import Layout from '../components/Layout/Layout';
import SelectorWrap from '../components/SelectorWrap/SelectorWrap';
import { useEffect, useRef } from 'react';
import { useThunkDispatch } from '../hooks/useThunkDispatch';
import { getGames } from '../store/reducers/game/action-creators';
import GamesCatalog from '../components/GamesCatalog/GamesCatalog';
import { ThemeProvider } from '@mui/material';
import { theme } from '../theme';
import { useSelector } from 'react-redux';
import { loadingSelector } from '../store/reducers/game/selectors';
import Loader from '../components/Loader/Loader';
import {
  catalogOrderingSelector,
  catalogPlatformsSelector,
  catalogSearchSelector,
} from '../store/reducers/catalog/selectors';
import { getPlatformsForRequest } from '../utils/getPlatformsForRequest';
import { setPlatforms } from '../store/reducers/catalog/action-creators';

const Home: NextPage = () => {
  const loading = useSelector(loadingSelector);
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
        <Search />
        <SelectorWrap />
        {loading ? <Loader /> : <GamesCatalog />}
      </Layout>
    </ThemeProvider>
  );
};

export default Home;

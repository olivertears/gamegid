import type { NextPage } from 'next';
import Search from '../components/Search/Search';
import Layout from '../components/Layout/Layout';
import SelectorWrap from '../components/SelectorWrap/SelectorWrap';
import { useEffect } from 'react';
import { useThunkDispatch } from '../hooks/useThunkDispatch';
import { getGames } from '../store/reducers/game/action-creators';
import GamesWrap from '../components/GamesWrap/GamesWrap';
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

const Home: NextPage = () => {
  const loading = useSelector(loadingSelector);
  const ordering = useSelector(catalogOrderingSelector);
  const platforms = useSelector(catalogPlatformsSelector);
  const search = useSelector(catalogSearchSelector);
  const dispatch = useThunkDispatch();

  useEffect(() => {
    dispatch(getGames({ ordering: ordering.value, search, platforms: getPlatformsForRequest(platforms) }));
  }, [ordering, platforms, search]);

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Search />
        <SelectorWrap />
        {loading ? <Loader /> : <GamesWrap />}
      </Layout>
    </ThemeProvider>
  );
};

export default Home;

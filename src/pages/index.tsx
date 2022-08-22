import type { NextPage } from 'next';
import Search from '../components/Search/Search';
import Layout from '../components/Layout/Layout';
import SelectorWrap from '../components/SelectorWrap/SelectorWrap';
import { useEffect } from 'react';
import { useThunkDispatch } from '../hooks/useThunkDispatch';
import { getGames } from '../store/reducers/game/action-creators';
import GamesCatalog from '../components/GamesCatalog/GamesCatalog';
import { ThemeProvider } from '@mui/material';
import { theme } from '../theme';

const Home: NextPage = () => {
  const dispatch = useThunkDispatch();

  useEffect(() => {
    dispatch(getGames({ page: 1, ordering: '-rating' }));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Search />
        <SelectorWrap />
        <GamesCatalog />
      </Layout>
    </ThemeProvider>
  );
};

export default Home;

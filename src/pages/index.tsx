import type { NextPage } from 'next';
import Search from '../components/Search/Search';
import Layout from '../components/Layout/Layout';
import SelectorWrap from '../components/SelectorWrap/SelectorWrap';
import { useEffect } from 'react';
import axios from 'axios';

const Home: NextPage = () => {
  return (
    <Layout>
      <Search />
      <SelectorWrap />
    </Layout>
  );
};

export default Home;

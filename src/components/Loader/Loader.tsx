import React, { FC } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { loaderSX } from './Loader.styles';

const Loader: FC = () => {
  return <CircularProgress sx={loaderSX} />;
};

export default Loader;

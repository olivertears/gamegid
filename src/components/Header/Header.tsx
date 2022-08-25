import React, { FC } from 'react';
import Search from '../Search/Search';
import SelectorWrap from '../SelectorWrap/SelectorWrap';
import { Box } from '@mui/material';
import { boxSX } from './Header.styles';

const Header: FC = () => {
  return (
    <Box sx={boxSX}>
      <Search />
      <SelectorWrap />
    </Box>
  );
};

export default Header;

import React, { FC, PropsWithChildren } from 'react';
import { Container } from '@mui/material';
import { containerSX } from './Layout.styles';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return <Container sx={containerSX}>{children}</Container>;
};

export default Layout;

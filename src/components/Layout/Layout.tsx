import React, { FC, PropsWithChildren } from 'react';
import { Container } from '@mui/material';
import { Head } from 'next/document';
import { LayoutProps } from './Layout.types';

const Layout: FC<PropsWithChildren<LayoutProps>> = ({ title, description, keywords, children }) => {
  return (
    <>
      <Head>
        <title>{title || 'GameGid'}</title>
        <meta name="description" content={`GameGid - you can find information about games here.` + description} />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content={'Games, GameGid' + keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
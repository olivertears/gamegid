import React, { FC } from 'react';
import { Container } from '@mui/material';
import Selector from '../Selector/Selector';
import MultipleSelector from '../MultipleSelector/MultipleSelector';
import { containerSX } from './SelectorWrap.styles';

const SelectorWrap: FC = () => {
  return (
    <Container sx={containerSX}>
      <Selector />
      <MultipleSelector />
    </Container>
  );
};

export default SelectorWrap;

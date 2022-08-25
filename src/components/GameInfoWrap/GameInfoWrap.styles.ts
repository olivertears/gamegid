import { styled } from '@mui/material';

export const Wrap = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
  },
}));

export const wrapSX = {
  display: 'flex',
  flexDirection: 'column',
  padding: '20px 0 0',
};

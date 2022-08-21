import { styled } from '@mui/material';

export const wrapSX = {
  width: '100%',
  columnGap: '20px',
  padding: '15px 24px',
  minWidth: '300px',
  columns: 1,
};

export const Wrap = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    columns: 2,
  },
  [theme.breakpoints.up('md')]: {
    columns: 3,
  },
}));

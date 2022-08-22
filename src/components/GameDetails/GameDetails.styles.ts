import { styled } from '@mui/material';

export const Title = styled('h2')(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    fontSize: '20px',
  },
}));

export const infoSX = {
  fontSize: '16px',
  fontWeight: 'normal',
};

export const boxSX = {
  display: 'flex',
};

export const arrowSX = {
  marginTop: '20px',
  cursor: 'pointer',
};

export const descriptionSX = {
  marginBottom: '30px',
};

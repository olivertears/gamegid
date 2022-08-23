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

export const descriptionSX = {
  marginBottom: '20px',
};

export const arrowSX = (open: boolean) => ({
  cursor: 'pointer',
  color: 'white',
  transform: open && 'rotate(180deg)',
});

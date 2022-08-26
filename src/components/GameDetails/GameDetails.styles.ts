import { styled, SxProps } from '@mui/material';
import { Theme } from '@mui/system';

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

export const arrowSX = (open: boolean): SxProps<Theme> => ({
  cursor: 'pointer',
  color: 'white',
  transform: open ? 'rotate(180deg)' : '',
});

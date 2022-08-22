import { styled } from '@mui/material';
import { makeStyles } from '@mui/styles';

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

export const useArrowStyles = makeStyles({
  arrow: {
    cursor: 'pointer',
    color: 'white',
  },
  rotatedArrow: {
    transform: 'rotate(180deg)',
  },
});

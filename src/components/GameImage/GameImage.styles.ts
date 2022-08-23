import { styled } from '@mui/material';

export const Wrap = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    width: 'auto',
    height: '300px',
    minHeight: '300px',
    overflow: 'hidden',
    borderRadius: '10px',
    position: 'relative',
    zIndex: 100,
  },
  [theme.breakpoints.up('sm')]: {
    height: '500px',
  },
  [theme.breakpoints.up('md')]: {
    width: '500px',
    minWidth: '500px',
  },
}));

export const Img = styled('img')(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    height: '100%',
    transform: 'translateX(-50%)',
    position: 'absolute',
    left: '50%',
    borderRadius: '10px',
  },
}));

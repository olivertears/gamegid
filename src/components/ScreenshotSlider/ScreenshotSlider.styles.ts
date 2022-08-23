import {styled} from '@mui/material';

export const boxSX = {
  display: 'flex',
  flexDirection: 'column',
  paddingBottom: '40px',
  textAlign: 'center',
};

export const sliderWrapSX = {
  height: '300px',
  position: 'relative',
  borderRadius: '10px',
  overflow: 'hidden'

};

export const sliderViewSX = {
  height: '100%',
  width: '100%',
  position: 'absolute',
  display: 'flex',
};

export const Img = styled('img')(({theme}) => ({
  [theme.breakpoints.up('xs')]: {
    height: '100%',
    transform: 'translateX(-50%)',
    position: 'absolute',
    left: '50%',
    borderRadius: '10px',
  },
}));

export const imgSX = {
  height: '100%',
  borderRadius: '10px',
};

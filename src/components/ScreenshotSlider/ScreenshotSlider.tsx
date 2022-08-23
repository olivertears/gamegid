import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { selectedGameSelector } from '../../store/reducers/game/selectors';
import { Box, CardMedia, Typography } from '@mui/material';
import { boxSX, imgSX, sliderWrapSX, sliderViewSX } from './ScreenshotSlider.styles';

const ScreenshotSlider: FC = () => {
  const game = useSelector(selectedGameSelector);

  return (
    <Box sx={boxSX}>
      <Typography fontSize="24px" fontWeight="600" marginBottom="20px">
        Screenshots
      </Typography>
      <Box sx={sliderWrapSX}>
        <Box sx={sliderViewSX}>
          {game.screenshots.map((screenshot) => (
            <CardMedia key={screenshot.id} component="img" image={screenshot.image} sx={imgSX} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ScreenshotSlider;

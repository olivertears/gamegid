import React, { FC, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Box, CardMedia, Typography } from '@mui/material';
import { boxSX, imgSX, sliderWrapSX, sliderViewSX, typographySX } from './ScreenshotSlider.styles';
import { selectedGameSelector } from '../../store/slices/game/selectors';

let left = 0;
let width = 0;
let startTouch: null | React.Touch = null;

const ScreenshotSlider: FC = () => {
  const game = useSelector(selectedGameSelector);
  const slider = useRef<HTMLDivElement>(null);

  const calculateWidth = () => (slider.current ? (width = slider.current.clientWidth - slider.current.scrollWidth) : 0);

  const mouseMoveAction: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();

    if (!width) {
      calculateWidth();
    }

    if (e.buttons === 1 && slider.current) {
      width = slider.current.clientWidth - slider.current.scrollWidth;
      left += e.movementX;
      if (left > 0) left = 0;
      if (left < width) left = width;
      slider.current.style.left = `${left}px`;
    }
  };

  const touchMoveAction: React.TouchEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    const currentTouch = e.touches[0];

    if (!width) {
      calculateWidth();
    }

    if (startTouch && slider.current) {
      left -= startTouch.clientX - currentTouch.clientX;
      if (left > 0) left = 0;
      if (left < width) left = width;
      slider.current.style.left = `${left}px`;
    }
    startTouch = currentTouch;
  };

  const touchEndAction = () => {
    startTouch = null;
  };

  return (
    <Box sx={boxSX}>
      <Typography sx={typographySX}>Screenshots</Typography>
      <Box sx={sliderWrapSX}>
        <Box
          sx={sliderViewSX}
          ref={slider}
          onMouseMove={mouseMoveAction}
          onTouchMove={touchMoveAction}
          onTouchEnd={touchEndAction}
        >
          {game.screenshots.map((screenshot) => (
            <CardMedia key={screenshot.id} component="img" image={screenshot.image} sx={imgSX} draggable={false} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ScreenshotSlider;

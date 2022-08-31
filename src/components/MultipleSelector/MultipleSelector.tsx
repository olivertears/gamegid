import React, { FC, useState } from 'react';
import {
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { platformList } from '../../consts';
import { formControlSX, MenuProps, selectSX } from './MultipleSelector.styles';
import { useDispatch, useSelector } from 'react-redux';
import { catalogSlice } from '../../store/slices/catalog';
import { catalogPlatformsSelector } from '../../store/slices/catalog/selectors';

const MultipleSelector: FC = () => {
  const platforms = useSelector(catalogPlatformsSelector);
  const { setPlatforms } = catalogSlice.actions;
  const [platformNames, setPlatformNames] = useState<string[]>(platforms);
  const dispatch = useDispatch();

  const handleChange = (event: SelectChangeEvent<string[]>) => {
    setPlatformNames(event.target.value as string[]);
    dispatch(setPlatforms(event.target.value as string[]));
  };

  return (
    <FormControl sx={formControlSX}>
      <InputLabel>Platforms</InputLabel>
      <Select
        multiple
        value={platformNames}
        onChange={handleChange}
        input={<OutlinedInput label="Platforms" />}
        renderValue={(selected) => selected.join(', ')}
        MenuProps={MenuProps}
        sx={selectSX}
        id={'platformFilter'}
      >
        {platformList.map((platform) => (
          <MenuItem key={platform} value={platform}>
            <Checkbox checked={platformNames.includes(platform)} />
            <ListItemText primary={platform} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default MultipleSelector;

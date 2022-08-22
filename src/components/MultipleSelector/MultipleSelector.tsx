import React, { FC, useEffect, useState } from 'react';
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
import { useDispatch } from 'react-redux';
import { setPlatforms } from '../../store/reducers/catalog/action-creators';
import { getPlatformsForRequest } from '../../utils/getPlatformsForRequest';

const MultipleSelector: FC = () => {
  const [platformNames, setPlatformNames] = useState<string[]>([] as string[]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPlatforms(platformNames));
  }, [platformNames]);

  const handleChange = (event: SelectChangeEvent) => {
    const {
      target: { value },
    } = event;
    setPlatformNames(typeof value === 'string' ? value.split(',') : value);
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

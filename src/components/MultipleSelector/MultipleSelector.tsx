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
import { useDispatch, useSelector } from 'react-redux';
import { setPlatforms } from '../../store/reducers/catalog/action-creators';
import { catalogPlatformsSelector } from '../../store/reducers/catalog/selectors';

const MultipleSelector: FC = () => {
  const platforms = useSelector(catalogPlatformsSelector);
  const [platformNames, setPlatformNames] = useState<string[]>(platforms);
  const dispatch = useDispatch();

  useEffect(() => {
    const platformsFromLS = localStorage.getItem('platforms');
    if (platformsFromLS) {
      dispatch(setPlatforms(JSON.parse(platformsFromLS)));
      setPlatformNames(JSON.parse(platformsFromLS));
    }
  }, []);

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

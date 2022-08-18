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
  TextField,
} from '@mui/material';
import { platformList } from '../../consts';
import { formControlSX, inputLabelSX, MenuProps, selectSX } from './MultipleSelector.styles';

const MultipleSelector: FC = () => {
  const [platforms, setPlatforms] = useState<string[]>([] as string[]);

  const handleChange = (event: SelectChangeEvent) => {
    const {
      target: { value },
    } = event;
    setPlatforms(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    // <FormControl sx={formControlSX}>
    //  <InputLabel sx={inputLabelSX}>Platforms</InputLabel>
    <TextField
      label={'Platforms'}
      select={true}
      multiple
      value={platforms}
      onChange={handleChange}
      // input={<OutlinedInput label="Platforms" />}
      renderValue={(selected) => selected.join(', ')}
      MenuProps={MenuProps}
      sx={selectSX}
    >
      {platformList.map((platform) => (
        <MenuItem key={platform} value={platform}>
          <Checkbox checked={platforms.includes(platform)} />
          <ListItemText primary={platform} />
        </MenuItem>
      ))}
    </TextField>
    //</FormControl>
  );
};

export default MultipleSelector;

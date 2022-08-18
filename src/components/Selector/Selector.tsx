import React, { FC, useState } from 'react';
import { Select, MenuItem, InputLabel, FormControl, SelectChangeEvent } from '@mui/material';
import { formControlSX, inputLabelSX, selectSX } from './Selector.styles';
import { ISelector, orderList } from '../../consts';

const Selector: FC = () => {
  const [ordering, setOrdering] = useState<ISelector>(orderList[0]);

  const handleChange = (event: SelectChangeEvent) => {
    setOrdering(event.target.value as ISelector);
  };

  return (
    <FormControl sx={formControlSX}>
      <InputLabel sx={inputLabelSX}>Ordering</InputLabel>
      <Select value={ordering} label="Ordering" onChange={handleChange} sx={selectSX}>
        {orderList.map((ordering) => (
          <MenuItem value={ordering}>{ordering.name}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Selector;

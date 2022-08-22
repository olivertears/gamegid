import React, {FC, useState} from 'react';
import {Select, MenuItem, InputLabel, FormControl, SelectChangeEvent} from '@mui/material';
import {formControlSX, selectSX} from './Selector.styles';
import {orderList} from '../../consts';
import {useDispatch, useSelector} from 'react-redux';
import {setOrdering} from '../../store/reducers/catalog/action-creators';
import {catalogOrderingSelector} from '../../store/reducers/catalog/selectors';
import {findOrderingByName} from '../../utils/findOrderingByName';

const Selector: FC = () => {
    const ordering = useSelector(catalogOrderingSelector);
    const [orderingName, setOrderingName] = useState<string>(ordering.name);
    const dispatch = useDispatch();


    const handleChange = (event: SelectChangeEvent) => {
        setOrderingName(event.target.value);
        dispatch(setOrdering(findOrderingByName(event.target.value)));
    };

    return (
        <FormControl sx={formControlSX}>
            <InputLabel>Ordering</InputLabel>
            <Select value={orderingName} label="Ordering" onChange={handleChange} sx={selectSX}>
                {orderList.map((ordering) => (
                    <MenuItem value={ordering.name} key={ordering.name}>
                        {ordering.name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default Selector;

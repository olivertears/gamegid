import React, { ChangeEvent, FC, useState } from 'react';
import { Container, Input } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { closeIconSX, inputSX, searchIconSX, containerSX } from './Search.styles';
import { useDispatch } from 'react-redux';
import { setSearch } from '../../store/reducers/catalog/action-creators';

const Search: FC = () => {
  const [query, setQuery] = useState<string>('');
  const [timer, setTimer] = useState<null | string | number | Timeout | undefined>(null);
  const dispatch = useDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    if (timer) {
      clearTimeout(timer);
    }
    setTimer(
      setTimeout(() => {
        dispatch(setSearch(e.target.value));
      }, 500),
    );
  };

  const clearInput = () => setSearch('');

  return (
    <Container sx={containerSX}>
      <SearchIcon sx={searchIconSX} />
      <Input value={query} onChange={handleChange} sx={inputSX} />
      {query && <CloseIcon sx={closeIconSX} onClick={clearInput} />}
    </Container>
  );
};

export default Search;

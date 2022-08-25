import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { Container, IconButton, Input } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { closeIconSX, inputSX, searchIconSX, containerSX } from './Search.styles';
import { useDispatch, useSelector } from 'react-redux';
import { setSearch } from '../../store/reducers/catalog/action-creators';
import { catalogSearchSelector } from '../../store/reducers/catalog/selectors';

const Search: FC = () => {
  const search = useSelector(catalogSearchSelector);
  const [query, setQuery] = useState<string>(search);
  const [timer, setTimer] = useState<null | string | number | Timeout | undefined>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const searchFromLS = localStorage.getItem('search');
    if (searchFromLS) {
      dispatch(setSearch(JSON.parse(searchFromLS)));
      setQuery(JSON.parse(searchFromLS));
    }
  }, []);

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
      {query && (
        <IconButton onClick={clearInput}>
          <CloseIcon sx={closeIconSX} />
        </IconButton>
      )}
    </Container>
  );
};

export default Search;

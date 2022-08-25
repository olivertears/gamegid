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
  const dispatch = useDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    dispatch(setSearch(e.target.value));
  };

  const clearInput = () => {
    setQuery('');
    dispatch(setSearch(''));
  };

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

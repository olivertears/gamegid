import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IOrdering } from '../../../models/IOrdering';
import { orderList } from '../../../consts';
import { setCookie } from 'nookies';
import { HYDRATE } from 'next-redux-wrapper';
import { CatalogState } from './types';
import { getLazyGames } from '../game/async-actions';

const initialState: CatalogState = {
  page: 1,
  ordering: orderList[0],
  search: '',
  platforms: [],
};

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setOrdering(state, action: PayloadAction<IOrdering>) {
      state.ordering = action.payload;
      setCookie(null, 'ordering', JSON.stringify(action.payload));
    },
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
      setCookie(null, 'search', JSON.stringify(action.payload));
    },
    setPlatforms(state, action: PayloadAction<string[]>) {
      state.platforms = action.payload;
      setCookie(null, 'platforms', JSON.stringify(action.payload));
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      const { ordering, search, platforms } = action.payload.catalog;
      state.ordering = ordering;
      state.search = search;
      state.platforms = platforms;
    },
    [getLazyGames.fulfilled.type]: (state) => {
      state.page = state.page + 1;
    },
  },
});

export default catalogSlice.reducer;

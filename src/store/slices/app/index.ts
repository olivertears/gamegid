import { createSlice } from '@reduxjs/toolkit';
import { getFullGameInfo, getGames } from '../game/async-actions';
import { AppState } from './types';

const initialState: AppState = {
  appLoading: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
  extraReducers: {
    [getGames.pending.type || getFullGameInfo.pending.type]: (state) => {
      state.appLoading = true;
    },
    [getGames.rejected.type || getFullGameInfo.rejected.type]: (state) => {
      state.appLoading = false;
    },
    [getGames.fulfilled.type || getFullGameInfo.fulfilled.type]: (state) => {
      state.appLoading = false;
    },
  },
});

export default appSlice.reducer;

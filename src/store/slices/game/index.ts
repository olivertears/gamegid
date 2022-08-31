import { IFullGame, IGame } from '../../../models/IGame';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getFullGameInfo, getGames, getLazyGames } from './async-actions';
import { GameState } from './types';
import { HYDRATE } from 'next-redux-wrapper';

const initialState: GameState = {
  gameLoading: false,
  games: [],
  selectedGame: {} as IFullGame,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {},
  extraReducers: {
    [HYDRATE]: (state, action) => {
      state.selectedGame = action.payload.game.selectedGame;
    },
    [getGames.fulfilled.type]: (state, action: PayloadAction<IGame[]>) => {
      state.games = action.payload;
    },
    [getLazyGames.pending.type]: (state) => {
      state.gameLoading = true;
    },
    [getLazyGames.rejected.type]: (state) => {
      state.gameLoading = false;
    },
    [getLazyGames.fulfilled.type]: (state, action: PayloadAction<IGame[]>) => {
      state.gameLoading = false;
      state.games = state.games = [...state.games, ...action.payload];
    },
    [getFullGameInfo.fulfilled.type]: (state, action: PayloadAction<IFullGame>) => {
      state.selectedGame = action.payload;
    },
  },
});

export default gameSlice.reducer;

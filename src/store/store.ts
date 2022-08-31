import { Action, combineReducers } from 'redux';
import catalog from './slices/catalog';
import game from './slices/game';
import app from './slices/app';
import { configureStore, ThunkAction } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

const rootReducer = combineReducers({
  catalog,
  game,
  app,
});

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export const store = makeStore();

export type RootStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<RootStore['getState']>;
export type AppDispatch = RootStore['dispatch'];
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export const wrapper = createWrapper<RootStore>(makeStore);

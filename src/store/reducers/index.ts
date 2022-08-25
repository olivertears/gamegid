import { AnyAction, applyMiddleware, combineReducers, createStore } from 'redux';
import catalog from './catalog';
import game from './game';
import app from './app';
import { HYDRATE } from 'next-redux-wrapper';
import { CatalogAction } from './catalog/types';
import { GameAction } from './game/types';
import { AppAction } from './app/types';

export const rootReducer = combineReducers({
  catalog,
  game,
  app,
});

export const reducer = (state: RootState, action: CatalogAction | GameAction | AppAction) => {
  return rootReducer(state, action);
  // if (action.type === HYDRATE) {
  //   const nextState = {
  //     ...state,
  //     ...action.payload,
  //   };
  //   return nextState;
  // } else {
  //   return rootReducer(state, action);
  // }
};

export type RootState = ReturnType<typeof rootReducer>;

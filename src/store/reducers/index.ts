import { AnyAction, combineReducers } from 'redux';
import app from './app';
import game from './game';
import { HYDRATE } from 'next-redux-wrapper';

const rootReducer = combineReducers({
  app,
  game,
});

export const reducer = (state: RootState, action: AnyAction) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    return nextState;
  } else {
    return rootReducer(state, action);
  }
};

export type RootState = ReturnType<typeof rootReducer>;
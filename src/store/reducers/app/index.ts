import { AppAction, AppState } from './types';

const initialState: AppState = {};

export default function (state = initialState, action: AppAction): AppState {
  switch (action) {
    default:
      return state;
  }
}
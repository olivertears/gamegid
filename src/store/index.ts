import { Context, createWrapper, MakeStore } from 'next-redux-wrapper';
import { reducer, rootReducer, RootState } from './reducers';
import { AnyAction, applyMiddleware, createStore } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';

const initStore = () => createStore(rootReducer, applyMiddleware(thunk));

// const makeStore: MakeStore<RootState> = (context: Context) => createStore(reducer, applyMiddleware(thunk));

export const wrapper = createWrapper(initStore);

export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>;

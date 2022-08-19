import { RootState } from '../index';
import { AppState } from './types';

export const appSelector = (state: RootState): AppState => state.app;

export const catalogPageSelector = (state: RootState): number => state.app.page;

export const catalogOrderingSelector = (state: RootState): string => state.app.ordering;

export const catalogSearchSelector = (state: RootState): string => state.app.search;

export const catalogPlatformsSelector = (state: RootState): string[] => state.app.platforms;

import { RootState } from '../index';

export const appLoadingSelector = (state: RootState): boolean => state.app.appLoading;

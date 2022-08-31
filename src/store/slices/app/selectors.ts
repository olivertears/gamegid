import { RootState } from '../../store';

export const appLoadingSelector = (state: RootState): boolean => state.app.appLoading;

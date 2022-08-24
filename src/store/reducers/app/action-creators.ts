import { AppActionEnum, SetAppLoadingAction } from './types';

export const setAppLoading = (loading: boolean): SetAppLoadingAction => ({
  type: AppActionEnum.SET_APP_LOADING,
  payload: loading,
});

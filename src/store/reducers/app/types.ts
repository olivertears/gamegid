export interface AppState {
  appLoading: boolean;
}

export enum AppActionEnum {
  SET_APP_LOADING = 'SET_APP_LOADING',
}

export interface SetAppLoadingAction {
  type: AppActionEnum.SET_APP_LOADING;
  payload: boolean;
}

export type AppAction = SetAppLoadingAction;

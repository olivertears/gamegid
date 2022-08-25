import { AppAction, AppActionEnum, AppState } from './types';

const initialState: AppState = {
  appLoading: false,
};

export default function (state = initialState, action: AppAction): AppState {
  switch (action.type) {
    case AppActionEnum.SET_APP_LOADING: {
      return { ...state, appLoading: action.payload };
    }
    default: {
      return state;
    }
  }
}

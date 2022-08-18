export interface State {
  page: number;
  ordering: string;
  search: string;
  platforms: string[];
}

export enum AppActionsEnum {
  SET_PAGE = 'SET_PAGE',
  SET_ORDERING = 'SET_ORDERING',
  SET_SEARCH = 'SET_SEARCH',
  ADD_PLATFORM = 'ADD_PLATFORM',
  REMOVE_PLATFORM = 'REMOVE_PLATFORM',
}

export interface SetPageAction {
  type: AppActionsEnum.SET_PAGE;
  payload: number;
}

export interface SetOrderingAction {
  type: AppActionsEnum.SET_ORDERING;
  payload: string;
}

export interface SetOrderingAction {
  type: AppActionsEnum.SET_ORDERING;
  payload: string;
}

export interface SetSearchAction {
  type: AppActionsEnum.SET_SEARCH;
  payload: string;
}

export interface AddPlatformAction {
  type: AppActionsEnum.ADD_PLATFORM;
  payload: string;
}

export interface RemovePlatformAction {
  type: AppActionsEnum.REMOVE_PLATFORM;
  payload: string;
}

export type AppAction = SetPageAction | SetOrderingAction | SetSearchAction | AddPlatformAction | RemovePlatformAction;

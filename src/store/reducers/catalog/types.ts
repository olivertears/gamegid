import { IOrdering } from '../../../models/IOrdering';

export interface CatalogState {
  page: number;
  ordering: IOrdering;
  search: string;
  platforms: string[];
}

export enum CatalogActionsEnum {
  SET_PAGE = 'SET_PAGE',
  SET_ORDERING = 'SET_ORDERING',
  SET_SEARCH = 'SET_SEARCH',
  ADD_PLATFORM = 'ADD_PLATFORM',
  REMOVE_PLATFORM = 'REMOVE_PLATFORM',
}

export interface SetPageAction {
  type: CatalogActionsEnum.SET_PAGE;
  payload: number;
}

export interface SetOrderingAction {
  type: CatalogActionsEnum.SET_ORDERING;
  payload: IOrdering;
}

export interface SetSearchAction {
  type: CatalogActionsEnum.SET_SEARCH;
  payload: string;
}

export interface AddPlatformAction {
  type: CatalogActionsEnum.ADD_PLATFORM;
  payload: string;
}

export interface RemovePlatformAction {
  type: CatalogActionsEnum.REMOVE_PLATFORM;
  payload: string;
}

export type CatalogAction =
  | SetPageAction
  | SetOrderingAction
  | SetSearchAction
  | AddPlatformAction
  | RemovePlatformAction;

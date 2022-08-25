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
  SET_PLATFORMS = 'SET_PLATFORMS',
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

export interface SetPlatformsAction {
  type: CatalogActionsEnum.SET_PLATFORMS;
  payload: string[];
}

export type CatalogAction = SetPageAction | SetOrderingAction | SetSearchAction | SetPlatformsAction;

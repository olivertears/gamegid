import {
  AddPlatformAction,
  CatalogActionsEnum,
  RemovePlatformAction,
  SetOrderingAction,
  SetPageAction,
  SetSearchAction,
} from './types';
import { IOrdering } from '../../../models/IOrdering';

export const setPage = (page: number): SetPageAction => ({
  type: CatalogActionsEnum.SET_PAGE,
  payload: page,
});

export const setOrdering = (ordering: IOrdering): SetOrderingAction => ({
  type: CatalogActionsEnum.SET_ORDERING,
  payload: ordering,
});

export const setSearch = (search: string): SetSearchAction => ({
  type: CatalogActionsEnum.SET_SEARCH,
  payload: search,
});

export const addPlatform = (platform: string): AddPlatformAction => ({
  type: CatalogActionsEnum.ADD_PLATFORM,
  payload: platform,
});

export const removePlatform = (platform: string): RemovePlatformAction => ({
  type: CatalogActionsEnum.REMOVE_PLATFORM,
  payload: platform,
});

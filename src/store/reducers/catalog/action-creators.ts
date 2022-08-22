import { CatalogActionsEnum, SetOrderingAction, SetPageAction, SetPlatformsAction, SetSearchAction } from './types';
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

export const setPlatforms = (platform: string[]): SetPlatformsAction => ({
  type: CatalogActionsEnum.SET_PLATFORMS,
  payload: platform,
});

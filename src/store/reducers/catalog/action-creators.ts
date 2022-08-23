import { CatalogActionsEnum, SetOrderingAction, SetPageAction, SetPlatformsAction, SetSearchAction } from './types';
import { IOrdering } from '../../../models/IOrdering';

export const setPage = (page: number): SetPageAction => ({
  type: CatalogActionsEnum.SET_PAGE,
  payload: page,
});

export const setOrdering = (ordering: IOrdering): SetOrderingAction => {
  localStorage.setItem('ordering', JSON.stringify(ordering));
  return {
    type: CatalogActionsEnum.SET_ORDERING,
    payload: ordering,
  };
};

export const setSearch = (search: string): SetSearchAction => {
  localStorage.setItem('search', JSON.stringify(search));
  return {
    type: CatalogActionsEnum.SET_SEARCH,
    payload: search,
  };
};

export const setPlatforms = (platforms: string[]): SetPlatformsAction => {
  localStorage.setItem('platforms', JSON.stringify(platforms));
  return {
    type: CatalogActionsEnum.SET_PLATFORMS,
    payload: platforms,
  };
};

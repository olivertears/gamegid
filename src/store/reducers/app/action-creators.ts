import {
  AddPlatformAction,
  AppActionsEnum,
  RemovePlatformAction,
  ResetPlatformsAction,
  SetLoadingAction,
  SetOrderingAction,
  SetPageAction,
  SetSearchAction,
} from './types';

export const setLoading = (loading: boolean): SetLoadingAction => ({
  type: AppActionsEnum.SET_LOADING,
  payload: loading,
});

export const setPage = (page: number): SetPageAction => ({
  type: AppActionsEnum.SET_PAGE,
  payload: page,
});

export const setOrdering = (ordering: string): SetOrderingAction => ({
  type: AppActionsEnum.SET_ORDERING,
  payload: ordering,
});

export const setSearch = (search: string): SetSearchAction => ({
  type: AppActionsEnum.SET_SEARCH,
  payload: search,
});

export const addPlatform = (platform: string): AddPlatformAction => ({
  type: AppActionsEnum.ADD_PLATFORM,
  payload: platform,
});

export const removePlatform = (platform: string): RemovePlatformAction => ({
  type: AppActionsEnum.REMOVE_PLATFORM,
  payload: platform,
});

export const resetPlatforms = (): ResetPlatformsAction => ({
  type: AppActionsEnum.RESET_PLATFORMS,
});

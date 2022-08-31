import { RootState } from '../../store';
import { IOrdering } from '../../../models/IOrdering';

export const catalogPageSelector = (state: RootState): number => state.catalog.page;

export const catalogOrderingSelector = (state: RootState): IOrdering => state.catalog.ordering;

export const catalogSearchSelector = (state: RootState): string => state.catalog.search;

export const catalogPlatformsSelector = (state: RootState): string[] => state.catalog.platforms;

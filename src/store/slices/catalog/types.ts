import { IOrdering } from '../../../models/IOrdering';

export interface CatalogState {
  page: number;
  ordering: IOrdering;
  search: string;
  platforms: string[];
}
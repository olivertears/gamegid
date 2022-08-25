import {CatalogAction, CatalogActionsEnum, CatalogState} from './types';
import {orderList} from '../../../consts';

const loadCatalogState = (): CatalogState => {
  if (typeof window !== 'undefined') {
    const ordering = localStorage.getItem('ordering');
    const search = localStorage.getItem('search');
    const platforms = localStorage.getItem('platforms');

    return {
      page: 1,
      ordering: ordering ? JSON.parse(ordering) : orderList[0],
      search: search ? JSON.parse(search) : '',
      platforms: platforms ? JSON.parse(platforms) : [],
    };
  }

  return {
    page: 1,
    ordering: orderList[0],
    search: '',
    platforms: [],
  };
};

const initialState = loadCatalogState();

export default function (state = initialState, action: CatalogAction): CatalogState {
  switch (action.type) {
    case CatalogActionsEnum.SET_PAGE: {
      return {...state, page: action.payload};
    }
    case CatalogActionsEnum.SET_ORDERING: {
      return {...state, ordering: action.payload};
    }
    case CatalogActionsEnum.SET_SEARCH: {
      return {...state, search: action.payload};
    }
    case CatalogActionsEnum.SET_PLATFORMS: {
      return {...state, platforms: action.payload};
    }
    default: {
      return state;
    }
  }
}

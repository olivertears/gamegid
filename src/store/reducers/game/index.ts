import { GameAction, GameActionsEnum, GameState } from './types';
import { IFullGame, IGame } from '../../../models/IGame';

const initialState: GameState = {
  loading: false,
  games: [] as IGame[],
  selectedGame: {} as IFullGame,
};

export default function (state = initialState, action: GameAction): GameState {
  switch (action.type) {
    case GameActionsEnum.SET_LOADING: {
      return { ...state, loading: action.payload };
    }
    case GameActionsEnum.SET_GAMES: {
      return { ...state, games: [...action.payload] };
    }
    case GameActionsEnum.ADD_GAMES: {
      return { ...state, games: [...state.games, ...action.payload] };
    }
    case GameActionsEnum.SET_SELECTED_GAME: {
      return { ...state, selectedGame: action.payload };
    }
    default: {
      return state;
    }
  }
}

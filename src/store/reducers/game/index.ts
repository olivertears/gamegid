import { GameAction, GameActionsEnum, GameState } from './types';
import { IFullGame, IGame } from '../../../models/IGame';

const initialState: GameState = {
  gameLoading: false,
  games: [] as IGame[],
  selectedGame: {} as IFullGame,
};

export default function (state = initialState, action: GameAction): GameState {
  switch (action.type) {
    case GameActionsEnum.SET_GAME_LOADING: {
      return { ...state, gameLoading: action.payload };
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

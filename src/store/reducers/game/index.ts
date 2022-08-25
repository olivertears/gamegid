import { GameAction, GameActionsEnum, GameState } from './types';
import { IFullGame } from '../../../models/IGame';

const loadGameState = (): GameState => {
  if (typeof window !== 'undefined') {
    const game = localStorage.getItem('selectedGame');

    return {
      gameLoading: false,
      games: [],
      selectedGame: game ? JSON.parse(game) : {},
    };
  }

  return {
    gameLoading: false,
    games: [],
    selectedGame: {} as IFullGame,
  };
};

const initialState = loadGameState();

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

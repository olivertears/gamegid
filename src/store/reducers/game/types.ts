import { IFullGame, IGame } from '../../../models/IGame';

export interface GameState {
  games: IGame[];
  selectedGame: IFullGame;
}

export enum GameActionsEnum {
  SET_GAMES = 'SET_GAMES',
  ADD_GAMES = 'ADD_GAMES',
  SET_SELECTED_GAME = 'SET_SELECTED_GAME',
}

export interface SetGamesAction {
  type: GameActionsEnum.SET_GAMES;
  payload: IGame[];
}

export interface AddGamesAction {
  type: GameActionsEnum.ADD_GAMES;
  payload: IGame[];
}

export interface SetSelectedGameAction {
  type: GameActionsEnum.SET_SELECTED_GAME;
  payload: IFullGame;
}

export type GameAction = SetGamesAction | AddGamesAction | SetSelectedGameAction;

import { IFullGame, IGame } from '../../../models/IGame';

export interface GameState {
  loading: boolean;
  games: IGame[];
  selectedGame: IFullGame;
}

export enum GameActionsEnum {
  SET_LOADING = 'SET_LOADING',
  SET_GAMES = 'SET_GAMES',
  ADD_GAMES = 'ADD_GAMES',
  SET_SELECTED_GAME = 'SET_SELECTED_GAME',
}

export interface SetLoadingAction {
  type: GameActionsEnum.SET_LOADING;
  payload: boolean;
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

export type GameAction = SetLoadingAction | SetGamesAction | AddGamesAction | SetSelectedGameAction;

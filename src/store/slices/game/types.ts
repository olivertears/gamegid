import { IFullGame, IGame } from '../../../models/IGame';

export interface GameState {
  gameLoading: boolean;
  games: IGame[];
  selectedGame: IFullGame;
}
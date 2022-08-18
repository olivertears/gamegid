import { RootState } from '../index';
import { IFullGame, IGame } from '../../../models/IGame';

export const gamesSelector = (state: RootState): IGame[] => state.game.games;

export const selectedGameSelector = (state: RootState): IFullGame => state.game.selectedGame;

export const loadingSelector = (state: RootState): boolean => state.game.loading;

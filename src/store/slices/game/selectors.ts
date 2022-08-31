import { RootState } from '../../store';
import { IFullGame, IGame } from '../../../models/IGame';

export const gamesSelector = (state: RootState): IGame[] => state.game.games;

export const selectedGameSelector = (state: RootState): IFullGame => state.game.selectedGame;

export const gameLoadingSelector = (state: RootState): boolean => state.game.gameLoading;
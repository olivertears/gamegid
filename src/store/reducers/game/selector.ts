import { RootState } from '../index';
import { GameState } from './types';

export const gameSelector = (state: RootState): GameState => state.game;
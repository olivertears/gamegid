import { createAsyncThunk } from '@reduxjs/toolkit';
import { GetGamesProps } from '../../../api/GameService/GameService.types';
import GameService from '../../../api/GameService/GameService';
import { IFullGame } from '../../../models/IGame';
import { IScreenshot } from '../../../models/IScreenshot';

export const getGames = createAsyncThunk('game/getGames', async ({ ordering, search, platforms }: GetGamesProps) => {
  const res = await GameService.getGames({ page: 1, ordering, search, platforms });
  return res.data.results;
});

export const getLazyGames = createAsyncThunk(
  'game/getLazyGames',
  async ({ page, ordering, search, platforms }: GetGamesProps) => {
    const res = await GameService.getGames({ page, ordering, search, platforms });
    return res.data.results;
  },
);

export const getFullGameInfo = createAsyncThunk('game/getFullGameInfo', async (gameSlug: string) => {
  const [fullGame, screenshots] = await Promise.all([
    GameService.getGameDetails(gameSlug),
    GameService.getGameScreenshots(gameSlug),
  ]);
  return {
    ...fullGame.data,
    screenshots: screenshots.data.results as IScreenshot[],
  } as IFullGame;
});

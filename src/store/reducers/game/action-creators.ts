import {
  AddGamesAction,
  GameAction,
  GameActionsEnum,
  SetGameLoadingAction,
  SetGamesAction,
  SetSelectedGameAction,
} from './types';
import { IFullGame, IGame } from '../../../models/IGame';
import { Dispatch } from 'react';
import { CatalogAction } from '../catalog/types';
import GameService from '../../../api/GameService/GameService';
import { IDetails } from '../../../models/IDetails';
import { IScreenshot } from '../../../models/IScreenshot';
import { GetGamesProps } from '../../../api/GameService/GameService.types';
import { setPage } from '../catalog/action-creators';
import { setAppLoading } from '../app/action-creators';
import { AppAction } from '../app/types';

export const setGameLoading = (loading: boolean): SetGameLoadingAction => ({
  type: GameActionsEnum.SET_GAME_LOADING,
  payload: loading,
});

export const setGames = (games: IGame[]): SetGamesAction => ({
  type: GameActionsEnum.SET_GAMES,
  payload: games,
});

export const addGames = (games: IGame[]): AddGamesAction => ({
  type: GameActionsEnum.ADD_GAMES,
  payload: games,
});

export const setSelectedGame = (selectedGame: IFullGame): SetSelectedGameAction => {
  localStorage.setItem('selectedGame', JSON.stringify(selectedGame));
  return {
    type: GameActionsEnum.SET_SELECTED_GAME,
    payload: selectedGame,
  };
};

// THUNK ACTIONS

export const getGames =
  ({ ordering, search, platforms }: GetGamesProps) =>
  async (dispatch: Dispatch<GameAction | CatalogAction | AppAction>) => {
    try {
      dispatch(setAppLoading(true));
      const res = await GameService.getGames({ page: 1, ordering, search, platforms });
      dispatch(setGames(res.data.results as IGame[]));
    } catch (err: any) {
      console.log(err.message);
    } finally {
      dispatch(setAppLoading(false));
    }
  };

export const getLazyGames =
  ({ page, ordering, search, platforms }: GetGamesProps) =>
  async (dispatch: Dispatch<GameAction | CatalogAction>) => {
    try {
      dispatch(setGameLoading(true));
      const res = await GameService.getGames({ page, ordering, search, platforms });
      dispatch(addGames(res.data.results as IGame[]));
      dispatch(setPage(page || 1 + 1));
    } catch (err: any) {
      console.log(err.message);
    } finally {
      dispatch(setGameLoading(false));
    }
  };

export const getFullGameInfo = (game: IGame) => async (dispatch: Dispatch<GameAction | CatalogAction | AppAction>) => {
  try {
    dispatch(setAppLoading(true));
    const [details, screenshots] = await Promise.all([
      GameService.getGameDetails(game.id),
      GameService.getGameScreenshots(game.id),
    ]);
    dispatch(
      setSelectedGame({
        ...game,
        details: details.data as IDetails,
        screenshots: screenshots.data.results as IScreenshot[],
      } as IFullGame),
    );
  } catch (err: any) {
    console.log(err.message);
  } finally {
    dispatch(setAppLoading(false));
  }
};

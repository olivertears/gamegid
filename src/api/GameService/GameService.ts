import axios, { AxiosResponse } from 'axios';
import { GetGamesProps, IAxiosResponseGames, IAxiosResponseScreenshots } from './GameService.types';
import { IDetails } from '../../models/IDetails';

const GameClient = axios.create({ baseURL: process.env.NEXT_PUBLIC_BASE_URL });

export default class GameService {
  static key = process.env.NEXT_PUBLIC_API_KEY;

  static async getGames({
    page,
    ordering,
    search,
    platforms,
  }: GetGamesProps): Promise<AxiosResponse<IAxiosResponseGames>> {
    return GameClient.get('games', {
      params: {
        key: this.key,
        page_size: 12,
        page: page,
        ordering: ordering,
        search: search,
        parent_platforms: platforms,
      },
    });
  }

  static async getGameDetails(gameId: number): Promise<AxiosResponse<IDetails>> {
    return GameClient.get(`games/${gameId}`, {
      params: {
        key: this.key,
      },
    });
  }

  static async getGameScreenshots(gameId: number): Promise<AxiosResponse<IAxiosResponseScreenshots>> {
    return axios.get(`games/${gameId}/screenshots`, {
      params: {
        key: this.key,
      },
    });
  }
}

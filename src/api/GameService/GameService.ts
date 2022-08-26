import axios, { AxiosResponse } from 'axios';
import { GetGamesProps, IAxiosResponseGames, IAxiosResponseScreenshots } from './GameService.types';
import { IFullGame } from '../../models/IGame';

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

  static async getGameDetails(gameSlug: string): Promise<AxiosResponse<IFullGame>> {
    return GameClient.get(`games/${gameSlug}`, {
      params: {
        key: this.key,
      },
    });
  }

  static async getGameScreenshots(gameSlug: string): Promise<AxiosResponse<IAxiosResponseScreenshots>> {
    return GameClient.get(`games/${gameSlug}/screenshots`, {
      params: {
        key: this.key,
      },
    });
  }
}

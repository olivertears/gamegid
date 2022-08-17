import axios, { AxiosResponse } from 'axios';
import { IGame } from '../models/IGame';
import { IScreenshot } from '../models/IScreenshot';
import { IDetails } from '../models/IDetails';

export default class GameService {
  static url = process.env.NEXT_PUBLIC_BASE_URL;
  static key = process.env.NEXT_PUBLIC_API_KEY;

  static async getGames(page: number, ordering: string, search?: string, platforms?: string): Promise<AxiosResponse> {
    return axios.get(`${this.url}`, {
      params: {
        key: this.key,
        page_size: 12,
        page: page,
        ordering: ordering,
        search: search,
        platforms: platforms,
      },
    });
  }

  static async getGameDetails(gameId: number): Promise<AxiosResponse> {
    return axios.get(`${this.url}/${gameId}`, {
      params: {
        key: this.key,
      },
    });
  }

  static async getGameScreenshots(gameId: number): Promise<AxiosResponse> {
    return axios.get(`${this.url}/${gameId}/screenshots`, {
      params: {
        key: this.key,
      },
    });
  }
}

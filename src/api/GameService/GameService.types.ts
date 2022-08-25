import { IGame } from '../../models/IGame';
import { IScreenshot } from '../../models/IScreenshot';

export type GetGamesProps = {
  page?: number;
  ordering: string;
  search?: string;
  platforms?: string;
};

export interface IAxiosResponseGames {
  results: IGame[];
}

export interface IAxiosResponseScreenshots {
  results: IScreenshot[];
}

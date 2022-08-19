import { IScreenshot } from './IScreenshot';
import { IDetails } from './IDetails';

export interface IGame {
  id: string;
  slug: string;
  name: string;
  released: string;
  background_image: string;
  rating: number;
}

export interface IFullGame extends IGame {
  details: IDetails;
  screenshots: IScreenshot[];
}

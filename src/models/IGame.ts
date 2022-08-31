import { IScreenshot } from './IScreenshot';

export interface IGame {
  id: number;
  slug: string;
  name: string;
  released: string;
  background_image: string;
  rating: number;
}

export interface IFullGame extends IGame {
  description: string;
  website: string;
  screenshots: IScreenshot[];
}

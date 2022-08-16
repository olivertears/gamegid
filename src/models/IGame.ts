import {IScreenshot} from "./IScreenshot";

export interface IGame {
    slug: string,
    name: string,
    released: string,
    background_image: string,
    rating: number,
    description: string,
    screenshots: IScreenshot[]
}
import { IOrdering } from './models/IOrdering';

export const orderList: IOrdering[] = [
  { value: '-rating', name: 'Rating ↓' },
  { value: 'rating', name: 'Rating ↑' },
  { value: 'released', name: 'Released ↓' },
  { value: '-released', name: 'Released ↑' },
];

export const platformList: string[] = [
  'PC',
  'PlayStation',
  'Xbox',
  'iOS',
  'Apple Macintosh',
  'Linux',
  'Nintendo',
  'Android',
  'Atari',
  'Commodore / Amiga',
  'SEGA',
  '3DO',
  'Neo Geo',
  'Web',
];

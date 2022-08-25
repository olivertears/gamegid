import { platformList } from '../consts';

export const getPlatformsForRequest = (platforms: string[]): string =>
  platforms
    .reduce((res: string[], platform) => [...res, (platformList.findIndex((pl) => pl === platform) + 1).toString()], [])
    .join(',') || '1,2,3,4,5,6,7,8,9,10,11,12,13,14';

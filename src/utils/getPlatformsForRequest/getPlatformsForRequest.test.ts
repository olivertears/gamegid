import { platformList } from '../../consts';
import { getPlatformsForRequest } from './getPlatformsForRequest';

describe('Get platforms for request util check', () => {
  test('Correct value', () => {
    expect(getPlatformsForRequest([platformList[0]])).toBe('1');
    expect(getPlatformsForRequest([platformList[0], platformList[3], platformList[13]])).toBe('1,4,14');
    expect(getPlatformsForRequest([])).toBe('1,2,3,4,5,6,7,8,9,10,11,12,13,14');
  });
  test('Incorrect value', () => {
    expect(getPlatformsForRequest(['wrongPlatform'])).toBe('0');
    expect(getPlatformsForRequest(['1'])).not.toBe('1');
  });
});

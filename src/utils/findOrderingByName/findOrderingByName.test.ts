import { findOrderingByName } from './findOrderingByName';
import { orderList } from '../../consts';

describe('Find ordering by name util check', () => {
  test('Correct value', () => {
    expect(findOrderingByName(orderList[0].name)).toBe(orderList[0]);
    expect(findOrderingByName(orderList[1].name)).toBe(orderList[1]);
    expect(findOrderingByName(orderList[2].name)).toBe(orderList[2]);
    expect(findOrderingByName(orderList[3].name)).toBe(orderList[3]);
  });
  test('Incorrect value', () => {
    expect(findOrderingByName(orderList[0].name)).not.toBe(orderList[1]);
    expect(findOrderingByName('somethingELse')).not.toBe(orderList[0]);
    expect(findOrderingByName('wrongName')).toBeUndefined();
  });
});

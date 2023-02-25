import {objSort} from '../src/utils/dynamicSort';

const obj = [
  {
    name: 'b',
    priority: false,
  },
  {
    name: 'a',
    priority: true,
  },
];

const sortedObj = [
  {
    name: 'a',
    priority: true,
  },
  {
    name: 'b',
    priority: false,
  },
];

describe('Test Sorting', () => {
  it('check name sort', () => {
    expect(objSort(obj, ['name'])).toEqual(sortedObj);
  });
  it('check priority sort', () => {
    expect(objSort(obj, ['priority'])).toEqual(sortedObj);
  });
  it('check both sort', () => {
    expect(objSort(obj, ['priority', 'name'])).toEqual(sortedObj);
  });
});

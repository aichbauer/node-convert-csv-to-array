import { convertCSVToArray } from '../src';

import { dataHeaderCommaSeparated } from './fixtures/data';
import {
  expectedResultObjectHeader,
  expectedResultArrayHeader,
} from './fixtures/expected-results';

test('convertCSVToArray | convert csv to array of objects', () => {
  const result = convertCSVToArray(dataHeaderCommaSeparated);

  expect(result).toEqual(expectedResultObjectHeader);
});

test('convertCSVToArray | convert csv to array of arrays', () => {
  const result = convertCSVToArray(dataHeaderCommaSeparated, { type: 'array' });

  expect(result).toEqual(expectedResultArrayHeader);
});

test('wrong data', () => {
  const result = () => convertCSVToArray({});

  expect(result).toThrow('data has to be typeof: string but got typeof: object');
});

test('wrong separator', () => {
  const result = () => convertCSVToArray('header,bla', { separator: ';' });

  expect(result).toThrow('data does not include separator: ;');
});

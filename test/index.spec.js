import { convertCSVToArray } from '../src';

import { dataHeaderCommaSeparated } from './fixtures/data';
import {
  expectedResultObjectHeader,
  expectedResultObjectWithoutHeader,
  expectedResultArrayHeader,
  expectedResultArrayWithoutHeader
} from './fixtures/expected-results';

test('convertCSVToArray | convert csv to array of objects', () => {
  const result = convertCSVToArray(dataHeaderCommaSeparated);

  expect(result).toEqual(expectedResultObjectHeader);
});

test('convertCSVToArray | convert csv to array of objects with header option explicitly true', () => {
  const result = convertCSVToArray(dataHeaderCommaSeparated, { header: true });

  expect(result).toEqual(expectedResultObjectHeader);
});

test('convertCSVToArray | convert csv to array of objects without header', () => {
  const result = convertCSVToArray(dataHeaderCommaSeparated, { header: false });

  expect(result).toEqual(expectedResultObjectWithoutHeader);
});

test('convertCSVToArray | convert csv to array of arrays', () => {
  const result = convertCSVToArray(dataHeaderCommaSeparated, { type: 'array' });

  expect(result).toEqual(expectedResultArrayHeader);
});

test('convertCSVToArray | convert csv to array of arrays with header option explicitly true', () => {
  const result = convertCSVToArray(dataHeaderCommaSeparated, { header: true, type: 'array' });

  expect(result).toEqual(expectedResultArrayHeader);
});

test('convertCSVToArray | convert csv to array of arrays without header', () => {
  const result = convertCSVToArray(dataHeaderCommaSeparated, { header: false, type: 'array' });

  expect(result).toEqual(expectedResultArrayWithoutHeader);
});

test('wrong data', () => {
  const result = () => convertCSVToArray({});

  expect(result).toThrow('data has to be typeof: string but got typeof: object');
});

test('wrong separator', () => {
  const result = () => convertCSVToArray('header,bla', { separator: ';' });

  expect(result).toThrow('data does not include separator: ;');
});

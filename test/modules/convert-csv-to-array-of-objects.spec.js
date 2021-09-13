import { convertCSVToArrayOfObjects } from '../../src/modules/convert-csv-to-array-of-objects';

import {
  dataHeaderSemicolonSeparated,
  dataHeaderTabSeparated,
  dataWithMultilineEntries,
  dataNotEndingInNewline
} from '../fixtures/data';
import {
  expectedResultObjectHeader,
  expectedResultObjectWithoutHeader,
  expectedResultObjectMultiline,
} from '../fixtures/expected-results';

test('convertCSVToArrayOfObjects | with header and semicolon separated', () => {
  const result = convertCSVToArrayOfObjects(dataHeaderSemicolonSeparated, { header: true, separator: ';' });

  expect(result).toEqual(expectedResultObjectHeader);
});

test('convertCSVToArrayOfObjects | with header and tab separated', () => {
  const result = convertCSVToArrayOfObjects(dataHeaderTabSeparated, { header: true, separator: '\t' });

  expect(result).toEqual(expectedResultObjectHeader);
});

test('convertCSVToArrayOfObjects | without header and semicolon separated', () => {
  const result = convertCSVToArrayOfObjects(dataHeaderSemicolonSeparated, { header: false, separator: ';' });

  expect(result).toEqual(expectedResultObjectWithoutHeader);
});

test('convertCSVToArrayOfObjects | without header and tab separated', () => {
  const result = convertCSVToArrayOfObjects(dataHeaderTabSeparated, { header: false, separator: '\t' });

  expect(result).toEqual(expectedResultObjectWithoutHeader);
});

test('convertCSVToArrayOfObjects | line break in value', () => {
  const result = convertCSVToArrayOfObjects(dataWithMultilineEntries, { header: false, separator: ';' });

  expect(result).toEqual(expectedResultObjectMultiline);
});

test('convertCSVToArrayOfObjects | no ending newline in input', () => {
  const result = convertCSVToArrayOfObjects(dataNotEndingInNewline, {header: true, separator: ','});

  expect(result).toEqual(expectedResultObjectHeader);
});
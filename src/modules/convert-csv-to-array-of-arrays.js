import { convertStringToNumber } from 'convert-string-to-number';

export const convertCSVToArrayOfArrays = (data, { header, separator }) => {
  const csv = data;
  const array = [];

  const rows = csv.split('\n');

  rows.forEach((row, idx) => {
    const values = row.split(separator);
    const checkedAndConvertedValues = [];
    if (
      rows.length - 1 !== idx
      && (
        (!header && idx !== 0)
        || header
      )
    ) {
      values.forEach((value) => {
        const convertedToNumber = convertStringToNumber(value);
        const thisValue = Number.isNaN(convertedToNumber) ? value : convertedToNumber;

        checkedAndConvertedValues.push(thisValue);
      });

      array.push(checkedAndConvertedValues);
    }
  });

  return array;
};

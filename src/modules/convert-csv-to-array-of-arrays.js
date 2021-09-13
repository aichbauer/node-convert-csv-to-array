import { convertStringToNumber } from 'convert-string-to-number';

export const convertCSVToArrayOfArrays = (data, { header, separator }) => {
  const csv = data;
  const array = [];

  const rows = csv.split(/(?!\B"[^"]*)\n(?![^"]*"\B)/g);
  // remove the empty array that will be present at the end of rows if the input ended in a newline
  if (csv.slice(-1) === '\n') rows.pop();

  rows.forEach((row, idx) => {
    const values = row.split(separator);
    const checkedAndConvertedValues = [];
    if (
      (!header && idx !== 0)
      || header
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

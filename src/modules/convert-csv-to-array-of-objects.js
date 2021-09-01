export const convertCSVToArrayOfObjects = (data, { header, separator }) => {
  const csv = data;
  const rows = csv.split(/(?!\B"[^"]*)\n(?![^"]*"\B)/g);
  const array = [];

  let headerRow;
  let headerObj;
  const content = [];

  rows.forEach((row, idx) => {
    row = row.trim();
    
    if (row.length === 0) {
      return;
    }
    if (!headerRow && !headerObj) {
      headerRow = row.split(separator);
      if (header) {
        array.push(headerRow);
      }
      headerRow.forEach((headerItem) => {
        headerObj = Object.assign({}, headerObj, {
          [headerItem]: undefined,
        });
      });
    } else if (rows.length - 1 !== idx) {
      const values = row.split(separator);

      values.forEach((value, i) => {
        const thisValue = Number.isNaN(Number(value)) ? value : Number(value);
        headerObj = Object.assign({}, headerObj, {
          [headerRow[i]]: thisValue,
        });
      });

      content.push(headerObj);
    }
  });

  array.push(...content);

  return array;
};

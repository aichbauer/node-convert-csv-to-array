export const splitRow = (row, separator) => {
  const values = row.split(new RegExp(`(?!\\B"[^"]*)${separator}(?![^"]*"\\B)`, 'g'));
  return values.map((str) => (str.match(/^".*"$/g) ? str.substr(1, str.length - 2) : str));
};

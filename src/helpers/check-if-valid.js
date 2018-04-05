export const checkIfValid = (data, { separator }) => {
  if (typeof data !== 'string') {
    throw new Error(`data has to be typeof: ${typeof ''} but got typeof: ${typeof data}`);
  } else if (!data.includes(separator)) {
    throw new Error(`data does not include separator: ${separator}`);
  }
};

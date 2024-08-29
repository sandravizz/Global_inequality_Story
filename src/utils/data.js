// This function takes an array of objects (data) and transforms each object's values to strings.
// If a value is undefined, it replaces it with an empty string.
export const preprocessor = (data) =>
  data.map((row) => {
    const newRow = {};
    for (const key in row) {
      newRow[key] = row[key] !== undefined ? row[key].toString() : "";
    }

    return newRow;
  });

// This function merges two arrays of objects based on a specified property.
// It takes three arguments: arr1, arr2, and prop.
// arr1 is the array of objects that will be used as the base for merging.
// arr2 is the array of objects that will be merged into arr1.
// prop is the property used to match objects between arr1 and arr2.
export const merge = (arr1, arr2, prop) => {
  const mapping = new Map(arr1.map((item) => [item[prop], item]));
  return arr2.map((d) => ({ ...d, ...mapping.get(d[prop]) }));
};

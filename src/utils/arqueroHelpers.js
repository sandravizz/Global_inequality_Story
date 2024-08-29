export function transformData(data) {
  const transformedData = {};
  data.forEach((item) => {
    Object.entries(item).forEach(([key, value]) => {
      if (!transformedData[key]) {
        transformedData[key] = [];
      }
      transformedData[key].push(value);
    });
  });

  return transformedData;
}

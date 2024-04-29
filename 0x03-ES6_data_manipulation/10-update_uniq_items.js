export default function updateUniqueItems(inputMap) {
  if (!(inputMap instanceof Map)) {
    throw new Error('Cannot process');
  }

  const updatedMap = new Map();
  for (const [key, value] of inputMap) {
    updatedMap.set(key, value === 1 ? 100 : value);
  }

  return updatedMap;
}

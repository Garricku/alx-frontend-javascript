export default function hasValuesFromArray(set, arr) {
  if (!(set instanceof Set) || !Array.isArray(arr)) {
    throw new Error('Invalid input: set must be a Set and arr must be an array');
  }

  return arr.every((element) => set.has(element));
}

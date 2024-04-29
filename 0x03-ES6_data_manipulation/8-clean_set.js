export default function cleanSet(set, startString) {
  if (!(set instanceof Set) || typeof startString !== 'string') {
    throw new Error('Invalid input: set must be a Set and startString must be a string');
  }

  const filteredValues = [...set].filter((value) => value.startsWith(startString));
  return filteredValues.join('-');
}

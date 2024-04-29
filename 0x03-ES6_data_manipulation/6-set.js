export default function setFromArray(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Input must be an array');
  }

  return new Set(arr);
}

export default function appendToEachArrayValue(array, appendString) {
  const arrayNew = [];
  for (const idx of array) {
    arrayNew.push(`${appendString}${idx}`);
  }

  return arrayNew;
}

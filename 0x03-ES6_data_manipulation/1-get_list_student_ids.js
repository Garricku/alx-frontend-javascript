export default function getListStudentIds(arrayOfObjects) {
  const arrayOfIds = [];
  if (Array.isArray(arrayOfObjects)) {
    arrayOfIds.push(...arrayOfObjects.map((object) => object.id));
  }
  return arrayOfIds;
}

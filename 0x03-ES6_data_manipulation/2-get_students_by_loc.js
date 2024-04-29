export default function getStudentsByLocation(listOfObjects, city) {
  const arrayObj = [];
  if (Array.isArray(listOfObjects) && typeof city === 'string') {
    arrayObj.push(...listOfObjects.filter((object) => object.location === city));
  }
  return arrayObj;
}

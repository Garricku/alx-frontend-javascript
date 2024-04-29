export default function getStudentIdsSum(listOfStudents) {
  let result = 0;
  if (Array.isArray(listOfStudents)) {
    result = listOfStudents.reduce((accumulator, currentObj) => accumulator + currentObj.id, 0);
  }
  return result;
}

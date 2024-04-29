export default function updateStudentGradeByCity(listOfStudents, city, newGrades) {
  if (!Array.isArray(listOfStudents) || typeof city !== 'string' || !Array.isArray(newGrades)) {
    return [];
  }

  const gradeMap = new Map(newGrades.map((gradeObj) => [gradeObj.studentId, gradeObj.grade]));

  const updatedStudents = listOfStudents
    .filter((student) => student.location === city)
    .map((student) => ({
      ...student,
      grade: gradeMap.get(student.id) || 'N/A',
    }));

  return updatedStudents;
}

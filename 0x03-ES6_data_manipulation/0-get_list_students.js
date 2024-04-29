export default function getListStudents() {
  const array = [];
  const student1 = {
    id: 1,
    firstName: 'Guillaume',
    location: 'San Francisco',
  };
  const student2 = {
    id: 2,
    firstName: 'James',
    location: 'Columbia',
  };
  const student5 = {
    id: 5,
    firstName: 'Serena',
    location: 'San Francisco',
  };
  array.push(student1, student2, student5);
  return array;
}

// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two student objects
const student1: Student = {
  firstName: "Alice",
  lastName: "Smith",
  age: 20,
  location: "New York",
};

const student2: Student = {
  firstName: "Bob",
  lastName: "Johnson",
  age: 22,
  location: "Los Angeles",
};

// Create an array of students
const studentsList: Student[] = [student1, student2];

// Render a table with student data
function renderTable(students: Student[]) {
  const table = document.createElement("table");
  const tbody = document.createElement("tbody");

  students.forEach((student) => {
    const row = document.createElement("tr");
    const firstNameCell = document.createElement("td");
    const locationCell = document.createElement("td");

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  document.body.appendChild(table);
}

// Call the renderTable function with the studentsList
renderTable(studentsList);

// Create two student objects
var student1 = {
    firstName: "Alice",
    lastName: "Smith",
    age: 20,
    location: "New York"
};
var student2 = {
    firstName: "Bob",
    lastName: "Johnson",
    age: 22,
    location: "Los Angeles"
};
// Create an array of students
var studentsList = [student1, student2];
// Render a table with student data
function renderTable(students) {
    var table = document.createElement("table");
    var tbody = document.createElement("tbody");
    students.forEach(function (student) {
        var row = document.createElement("tr");
        var firstNameCell = document.createElement("td");
        var locationCell = document.createElement("td");
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

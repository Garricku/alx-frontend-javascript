export const cpp = new Cpp();
export const java = new Java();
export const react = new React();

const cTeacher: Subjects.Teacher = {
    firstName: "Guillaume",
    lastName: "Salva",
    experienceTeachingC: 10,
};

console.log("Cpp:");
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log("Java:");
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log("React:");
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

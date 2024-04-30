interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  readonly location: string;
  [key: string]: any; // Allow any additional attributes
  }

interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  readonly location: string;
  [key: string]: any; // Allow any additional attributes
  }

interface Directors extends Teacher {
  numberOfReports: number;
  }

// Define the interface for the printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
  }

// Implement the printTeacher function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  const firstInitial = firstName.charAt(0).toUpperCase();
  const formattedLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
  return `${firstInitial}. ${formattedLastName}`;
  };

 // Define the interface for the constructor
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClass;
  }

// Define the interface for the StudentClass
interface StudentClass {
  workOnHomework(): string;
  displayName(): string;
  }

// Implement the StudentClass
class Student implements StudentClass {
  constructor(private firstName: string, private lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
    }

  displayName(): string {
    return this.firstName;
    }
  }

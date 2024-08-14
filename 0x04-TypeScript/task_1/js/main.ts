interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    [key: string]: any, 
};

const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };
  
// console.log(teacher3);

interface Directors extends Teacher {
    numberOfReports: number,
};

const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
  
// console.log(director1);

interface printTeacherFunction { 
    (firstName: String, lastName: String): string,
};

const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.slice(0, 1)}. ${lastName}`
};

// console.log(printTeacher("Zidane", "ZAOUI"));
interface studentConstructor {
    new (firstName: String, lastName: String): Student,
};

interface Student {
    workOnHomework(): string;
    displayName(): string; 
};

class StudentClass implements Student {

    firstName: String;
    lastName: String;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return `${this.firstName}`
    }
};

// const zidane = new StudentClass("Zidane", "ZAOUI");
// console.log(zidane.firstName, zidane.lastName, zidane.workOnHomework(), zidane.displayName())
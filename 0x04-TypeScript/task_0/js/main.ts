interface Student {
    firstName : String,
    lastName : String,
    age : Number,
    location : String,
};

const studentOne: Student = {
    firstName: 'Zidane',
    lastName: 'ZAOUI',
    age: 24,
    location: 'Mohemmadia',
};

const studentTwo: Student = {
    firstName: 'Radouane',
    lastName: 'ABOUNOUAS',
    age: 26,
    location: 'Safi',
};

const studentList: Array<Student> = [studentOne, studentTwo];

studentList.forEach(element => {
    console.log(`${element.firstName} | ${element.location}`)
});
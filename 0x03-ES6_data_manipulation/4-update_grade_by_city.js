export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  const studentsCity = studentsList.filter((students) => students.location === city);
  const studentsNewGrades = studentsCity.map((student) => {
    const studentGrade = newGrades.find((grade) => grade.studentId === student.id);
    return {
      ...student,
      grade: studentGrade ? studentGrade.grade : 'N/A',
    };
  });
  return studentsNewGrades;
}

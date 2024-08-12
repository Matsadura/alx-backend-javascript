export default function getStudentByLocation(arr, loc) {
  const listLoc = arr.filter((students) => students.location === loc);
  return listLoc;
}

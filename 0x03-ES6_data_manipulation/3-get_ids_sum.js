export default function getStudentIdsSum(arr) {
  const sumOfIds = arr.reduce((students, current) => students + current.id, 0);
  return sumOfIds;
}

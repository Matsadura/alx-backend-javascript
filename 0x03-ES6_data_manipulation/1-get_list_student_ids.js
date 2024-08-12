export default function getListStudentsIds(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }
  const arrIds = arr.map((students) => (students.id));
  return arrIds;
}

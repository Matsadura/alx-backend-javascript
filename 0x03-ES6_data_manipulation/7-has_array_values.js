export default function hasValuesFromArray(set, arr) {
  const arrSet = new Set(arr);
  return arrSet.isSubsetOf(set);
}

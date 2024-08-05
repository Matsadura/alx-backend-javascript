export default function appendToEachArrayValue(array, appendString) {
  const result = [];
  let count = 0;
  for (const arg of array) {
    result[count] = appendString + arg;
    count += 1;
  }

  return result;
}

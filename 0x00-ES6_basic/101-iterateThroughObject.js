export default function iterateThroughObject(reportWithIterator) {
  let result = '';
  for (const report of reportWithIterator) {
    if (result) {
      result += ' | ';
    }
    result += report;
  }
  return result;
}

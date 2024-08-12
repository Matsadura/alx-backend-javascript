export default function cleanSet(set, startString) {
  let result = '';

  if (startString === '' || typeof (startString) !== 'string') {
    return result;
  }
  for (const element of set) {
    if (element.startsWith(startString)) {
      if (result === '') {
        result = result.concat(element.slice(startString.length));
      } else {
        result = result.concat(`-${element.slice(startString.length)}`);
      }
    }
  }
  return result;
}

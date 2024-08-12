export default function cleanSet(set, startString) {
  let result = '';
  for (const element of set) {
    if (element.startsWith(startString) && startString !== '') {
      if (result === '') {
        result = result.concat(element.slice(startString.length));
      } else {
        result = result.concat(`-${element.slice(startString.length)}`);
      }
    }
  }
  return result;
}

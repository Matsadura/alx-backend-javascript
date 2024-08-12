export default function createInt8TypedArrary(length, position, value) {
  const buff = new ArrayBuffer(length);
  const int8 = new Int8Array(buff);
  try {
    int8[position] = value;
  } catch (e) {
    throw Error('Position outside range');
  }
  const test = new DataView(buff, 0);
  return test;
}

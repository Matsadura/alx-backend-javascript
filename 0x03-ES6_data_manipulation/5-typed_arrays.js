export default function createInt8TypedArrary(length, position, value) {
  const buff = new ArrayBuffer(length);
  const view = new DataView(buff);
  if (position > length || position < 0) {
    throw Error('Position outside range');
  }
  view.setInt8(position, value);
  return view;
}

export default function createIteratorObject(report) {
  const values = Object.values(report.allEmployees).flat();
  let count = 0;
  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      let obj;
      if (count < values.length) {
        obj = { value: values[count], done: false };
        count += 1;
      } else {
        obj = { value: undefined, done: true };
      }
      return obj;
    },
  };
}

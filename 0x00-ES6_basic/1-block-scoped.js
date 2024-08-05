export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    task = !task2;
    task2 = !task;
  }

  return [task, task2];
}

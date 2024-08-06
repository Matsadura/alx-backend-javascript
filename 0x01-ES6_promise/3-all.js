import { uploadPhoto, createUser } from './utils.js'; // eslint-disable-line

export default function handleProfileSignup() {
  const promises = [uploadPhoto(), createUser()];
  Promise.all(promises).then((results) => console.log(`${results[0].body} ${results[1].firstName} ${results[1].lastName}`))
    .catch(() => new Error('Signup system offline'));
}

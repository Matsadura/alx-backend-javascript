export default function getFullResponseFromAPI(bool) {
  const promise = new Promise((resolve, reject) => {
    if (bool === true) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
  return promise;
}

import { uploadPhoto, createUser } from './utils';

const asyncUploadUser = async () => {
  let photoRes;
  let userRes;
  try {
    photoRes = await uploadPhoto();
    userRes = await createUser();
  } catch (e) {
    return { photo: null, user: null };
  }
  return {
    photo: photoRes,
    user: userRes,
  };
};

export default asyncUploadUser;

import * as p from './utils';

async function asyncUploadUser() {
  try {
    const [photo, user] = await Promise.all([p.uploadPhoto(), p.createUser()]);
    return { photo, user };
  } catch (error) {
    console.error('Error during asyncUploadUser:', error.message);
    return { photo: null, user: null };
  }
}

export default asyncUploadUser;

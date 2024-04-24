import * as p from './utils';

function handleProfileSignup() {
  const profilePromise = p.uploadPhoto();
  const userPromise = p.createUser();

  Promise.all([profilePromise, userPromise])
    .then(([profile, user]) => {
      console.log(profile.body, user.firstName, user.lastName);
    })
    .catch((error) => {
      console.error('Signup system offline');
    });
}

export default handleProfileSignup;

function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    const object = {
      status: 200,
      body: 'Success',
    };
    if (success) {
      resolve(object);
    }
    if (success === false) {
      reject(new Error('The fake API is not working currently'));
    }
  });
}

export default getFullResponseFromAPI;

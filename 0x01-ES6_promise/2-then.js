function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    const successObject = {
      status: 200,
      body: 'Success',
    };
    const errObject = {};
    promise
      .then(() => {
        console.log('Got a response from the API');
        resolve(successObject);
      })
      .catch((error) => {
        console.error();
        reject(errObject);
      });
  });
}

export default handleResponseFromAPI;

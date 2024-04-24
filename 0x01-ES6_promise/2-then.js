function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    const successObject = {
      status: 200,
      body: 'Success',
    };
    promise
      .then(() => {
        console.log('Got a response from the API');
        resolve(successObject);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export default handleResponseFromAPI;

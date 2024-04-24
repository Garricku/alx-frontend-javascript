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
        console.error('Error fetching data:', error.message);
        reject(error);
      });
  });
}

export default handleResponseFromAPI;

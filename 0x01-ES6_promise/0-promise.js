function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const a = 2;
    if (a === 2) {
      // Resolve the Promise with the fetched data
      resolve('true');
    } else {
      // Or reject the Promise with an error
      reject(new Error('false'));
    }
  });
}

export default getResponseFromAPI;

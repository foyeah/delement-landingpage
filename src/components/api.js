export async function sendData(data) {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(data),
  });

  const statusCode = String(response.status).charAt(0);
  if (statusCode === '2') {
    return response;
  }
  if (statusCode !== '2') {
    const error = new TypeError();
    error.errorMessages = {
      name: 'UnknownError',
      message: 'Unknown error happened',
    };
    throw error;
  }

  throw new Error('Something went wrong!');
}

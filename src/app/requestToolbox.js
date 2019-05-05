import axios from 'axios';

export default async function requestBackend(data, url) {
  return await Promise.resolve(
    axios({
      method: 'post',
      url: `http://localhost:4000${url}`,
      data: data,
    }),
  );
}

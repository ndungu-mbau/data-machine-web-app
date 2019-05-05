import axios from 'axios';

export default async function requestBackend(data, url) {
  return;
  axios({
    method: 'post',
    url: `http://localhost:4000${url}`,
    data: data,
  });
}

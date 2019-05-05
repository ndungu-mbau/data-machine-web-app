import axios from 'axios';

export default async function requestBackend(data, url) {
  let res = await axios.post(`http://localhost:4000${url}`, {
    method: 'post',
    data: data,
  });
  console.log(res);
}

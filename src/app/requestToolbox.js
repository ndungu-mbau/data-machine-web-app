import { axios } from 'axios';

const url = 'http://localhost:4000';

export default function requestBackend(data) {
  axios({
    method: 'post',
    url,
    data: data,
  });
}

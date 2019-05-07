import axios from 'axios';
import toast from './services/toast';

export async function requestBackend(data, url) {
  return axios({
    method: 'post',
    url: `http://localhost:4000${url}`,
    data: data,
  });
}

export async function graphQuery(query, variables) {
  return axios({
    method: 'post',
    url: `http://localhost:4000`,
    data: {
      query,
      variables,
    },
    headers: {
      auth: localStorage.getItem('token'),
    },
  });
}

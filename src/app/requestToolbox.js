import axios from 'axios';

import config from '../config';

const getEnv = () => {
  if (window.location.href.includes('localhost') || window.location.href.includes('0.0.0.0')) {
    return config['development'];
  } else if (window.location.href.includes('staging')) {
    return config['staging'];
  } else {
    return config['production'];
  }
};

const { apiUrl } = getEnv();

export async function requestBackend(data, url) {
  return axios({
    method: 'post',
    url: `${apiUrl}${url}`,
    data: data,
  });
}

export async function getBackend(url) {
  return axios({
    method: 'get',
    url: `${apiUrl}${url}`,
    // data: data,
  });
}

export async function graphQuery(query, variables) {
  return axios({
    method: 'post',
    url: `${apiUrl}`,
    data: {
      query,
      variables,
    },
    headers: {
      auth: localStorage.getItem('token'),
    },
  });
}

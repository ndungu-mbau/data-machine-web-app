export default {
  production: {
    apiUrl: 'https://databank-api-server.herokuapp.com',
    appUrl: 'https://databank-web.herokuapp.com/',
    log_level: 'silent',
  },
  staging: {
    apiUrl: 'https://staging.graph.braiven.io',
    appUrl: 'https://staging.braiven.io',
    log_level: 'silent',
  },
  development: {
    apiUrl: 'http://localhost:4000',
    appUrl: 'http://localhost:3002',
    log_level: undefined,
  },
};

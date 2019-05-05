require('babel-polyfill');
require('dotenv').config();

const app = require('./app');

const { PORT = 3002, HOST = '0.0.0.0', NODE_ENV, LOG_LEVEL } = process.env;

app.listen(PORT, HOST, () =>
  console.log(`
  🔧  Configured for ${NODE_ENV}.
    => address: ${HOST}
    => port: ${PORT}
    => log: ${LOG_LEVEL}

  🚀  "data-machine-saas" has launched from http://${HOST}:${PORT}
  `),
);

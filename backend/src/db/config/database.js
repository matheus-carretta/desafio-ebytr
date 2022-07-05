require('dotenv').config();

const suffix = {
  dev: '-dev',
  development: '-dev',
  test: '-test',
};

const options = {
  host: 'localhost',
  port: '3306',
  database:
    `${'ebytr' || suffix.test}`,
  username: 'root',
  password: 'docker',
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
};

module.exports = {
  development: {
    ...options,
  },
  test: {
    ...options,
  },
};

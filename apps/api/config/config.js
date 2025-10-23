const dotenv = require('dotenv');

dotenv.config();

const shared = {
  use_env_variable: 'DATABASE_URL',
  dialect: 'postgres',
  dialectOptions: {},
  define: {
    underscored: true,
  },
  timezone: 'Asia/Jakarta',
};

module.exports = {
  development: shared,
  test: shared,
  production: shared,
};

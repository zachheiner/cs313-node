const Sequelize = require('sequelize');

let sequelize = null;
if (process.env.HEROKU_POSTGRESQL_BRONZE_URL) {
  sequelize = new Sequelize(process.env.HEROKU_POSTGRESQL_BRONZE_URL, {
    dialect : 'postgres',
    protocol: 'postgres'

  });
} else {
  sequelize = new Sequelize({
    dialect : 'postgres',
    database: 'shoelit',
    username: 'postgres',
    password: 'Techtastic1206'
  });
}

module.exports = {
  default: sequelize
};

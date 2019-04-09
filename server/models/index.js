const Sequelize = require('sequelize');

let sequelize = null;
if (process.env.DATABASE_URL) {
  sequelize = new Sequelize(process.env.DATABASE_URL, {
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

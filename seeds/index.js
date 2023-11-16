const sequelize = require('../config/connection');
const comment = require('./comments-data');
const user = require('./users-data');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await comment();

  await user();

  process.exit(0);
};

seedAll();
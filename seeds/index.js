const sequelize = require('../config/connection');
const comment = require('./comments-data');
const user = require('./users-data');
const blog = require('./blog-data')

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await comment();

  await user();

  await blog();

  process.exit(0);
};

seedAll();
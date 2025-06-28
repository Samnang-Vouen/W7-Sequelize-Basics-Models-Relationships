const { sequelize } = require('./models');

(async () => {
  await sequelize.authenticate();
  console.log('Database connected.');
})();
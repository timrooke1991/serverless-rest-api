const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  `postgres://${process.env.PG_SQL_USERNAME}:${
    process.env.PG_SQL_PASSWORD
  }@todo-db.cacgpkx5wkii.eu-west-2.rds.amazonaws.com/todo_db`
);

const todo = require('./models/todo')(sequelize, Sequelize);

const db = {
  Sequelize,
  sequelize,
  todo
};

db.sequelize.sync();

module.exports = db;

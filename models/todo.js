module.exports = (sequelize, DataTypes) => {
  return sequelize.define('todo', {
    id: {
      DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    task: {
      DataTypes.STRING
    },
    completed: {
      DataTypes.BOOLEAN,
      defaultValue: false
    },
    created_at: {
      DataTypes.DATE,
      defaultValue: new Date(),
      allowNull: false
    },
    updated_at: {
      DataTypes.DATE,
      defaultValue: new Date(),
      allowNull: false
    },
    deleted_at: {
      DataTypes.DATE
    }
  }, {
    paranoid: true,
    underscored: true,
  });
};
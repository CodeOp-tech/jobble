'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Job, {
        foreignKey: 'EmployerId'
      });
      User.belongsToMany(models.Job, { through: "UsersJobs", as: "Match", foreignKey: "UserId" });
    }
  };
  User.init({
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    admin: DataTypes.BOOLEAN,
    Username: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
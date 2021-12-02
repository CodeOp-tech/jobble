'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UsersJobs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  UsersJobs.init({
    UserId: DataTypes.INTEGER,
    JobId: DataTypes.INTEGER,
    state: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'UsersJobs',
  });
  return UsersJobs;
};
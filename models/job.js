'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Job extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Job.belongsTo(models.User, { foreignKey: 'EmployerId' });
      Job.belongsToMany(models.User, { through: "UsersJobs", as: "Match", foreignKey: "JobId" });
      Job.belongsToMany(models.User, { through: "Favorites", as:"Favorite", foreignKey: "JobId" });
    }
  };
  Job.init({
    title: DataTypes.STRING,
    type: DataTypes.STRING,
    description: DataTypes.TEXT,
    experience: DataTypes.STRING,
    contract: DataTypes.STRING,
    salary: DataTypes.INTEGER,
    company: DataTypes.STRING,
    company_description: DataTypes.TEXT,
    perks: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Job',
  });
  return Job;
};
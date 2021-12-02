'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      "UsersJobs", // name of Source model
      "state", // name of the key we're adding
      {
        type: Sequelize.STRING,
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      "UsersJobs", // name of Source model
      "state" // key we want to remove
    );
  },
};
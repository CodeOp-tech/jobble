'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      "Jobs", // name of Source model
      "EmployerId", // name of the key we're adding
      {
        type: Sequelize.INTEGER,
        references: {
          model: "Users", // name of Target model
          key: "id", // key in Target model that we're referencing
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      "Jobs", // name of Source model
      "EmployerId" // key we want to remove
    );
  }
};

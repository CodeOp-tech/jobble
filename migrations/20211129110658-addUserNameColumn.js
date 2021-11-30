'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      "Users", // name of Source model
      "Username", // name of the key we're adding
      {
        type: Sequelize.STRING,
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      "Users", // name of Source model
      "Username" // key we want to remove
    );
  },
};
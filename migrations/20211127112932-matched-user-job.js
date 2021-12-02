"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      "UsersJobs",
      {
        UserId: {
          type: Sequelize.INTEGER,
          references: {
            model: "Users",
            key: "id",
          },
          allowNull: false,
          onDelete: "CASCADE",
          onUpdate: "CASCADE",
        },
        JobId: {
          type: Sequelize.INTEGER,
          references: {
            model: "Jobs",
            key: "id",
          },
          allowNull: false,
          onDelete: "CASCADE",
          onUpdate: "CASCADE",
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      },
      {
        uniqueKeys: {
          actions_unique: {
            fields: ["UserId", "JobId"],
          },
        },
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("UsersJobs");
  },
};

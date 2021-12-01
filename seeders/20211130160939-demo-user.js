"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Users", [
      {
        id: null,
        firstName: "Test1",
        lastName: "Test1",
        username: "Test1",
        password: "Test1",
        email: "test@test.com",
        admin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: null,
        firstName: "Test2",
        lastName: "Test2",
        username: "Test2",
        password: "Test2",
        email: "test@test.com",
        admin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: null,
        firstName: "Maria",
        lastName: "Mora",
        username: "mariamora",
        password: "1234",
        email: "test@test.com",
        admin: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: null,
        firstName: "Vennela",
        lastName: "Lingam",
        username: "VennelaL",
        password: "1234",
        email: "test@test.com",
        admin: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: null,
        firstName: "Ariana",
        lastName: "Canedo",
        username: "ArianaC",
        password: "1234",
        email: "test@test.com",
        admin: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};

//Trying to commit

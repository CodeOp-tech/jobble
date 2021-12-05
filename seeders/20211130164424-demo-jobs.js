'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Jobs', [
      {
      id: 1,
      title: 'Full Stack Developer',
      type: 'Developer',
      description: "Full Stack Developer with React.js and Node.js who knows how to use Sequelize",
      experience: '2 years',
      contract: 'full-time',
      salary: 30000,
      company: 'The Coolest job',
      company_description: 'We are a super cool company',
      perks: 'Lovely breakfast and team outings',
      EmployerId: 1,
      createdAt: '2021-12-01 10:34:09',
      updatedAt: '2021-12-01 10:34:09'
    },
  {
    id: 2,
    title: 'Front End Developer',
    type: 'Developer',
    description: "Front End Developer with React.js who knows how to use Sequelize",
    experience: '2 years',
    contract: 'full-time',
    salary: '27.000',
    company: 'The Coolest job',
    company_description: 'We are a super cool company',
    perks: 'Lovely breakfast and team outings',
    EmployerId: 4,
    createdAt: '2021-12-01 10:34:09',
    updatedAt: '2021-12-01 10:34:09'
  },
  {
    id: 3,
    title: 'Back End Developer',
    type: 'Developer',
    description: "Back End Developer with Node.js who knows how to use Sequelize",
    experience: '2 years',
    contract: 'full-time',
    salary: '30.000',
    company: 'The Coolest job',
    company_description: 'We are a super cool company',
    perks: 'Lovely breakfast and team outings',
    EmployerId: 4,
    createdAt: '2021-12-01 10:34:09',
    updatedAt: '2021-12-01 10:34:09'
  },
  {
    id: 4,
      title: 'Receptionist',
      type: 'Administrative',
      description: "Receptionist for our new office in Barcelona",
      experience: '5 years',
      contract: 'full-time',
      salary: '25.000',
      company: 'Company 1',
      company_description: 'We are a super cool company',
      perks: 'Lovely breakfast and kindergarten tickets',
      EmployerId: 5,
      createdAt: '2021-12-01 10:34:09',
      updatedAt: '2021-12-01 10:34:09'
},
  {
    id: 5,
    title: 'Bank director',
    type: 'Finance',
    description: "Looking for our new director in Barcelona",
    experience: '15 years',
    contract: 'full-time',
    salary: '90.000',
    company: 'Your Favorite Bank',
    company_description: 'We are a very modern bank',
    perks: 'kindergarten tickets, restaurant tickets, free premium account',
    EmployerId: 5,
    createdAt: '2021-12-01 10:34:09',
    updatedAt: '2021-12-01 10:34:09'
    }
]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Jobs', null, {});
  }
};
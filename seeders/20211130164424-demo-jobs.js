'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
      id: '1',
      title: 'Full Stack Developer',
      type: 'Developer',
      description: "Full Stack Developer with React.js and Node.js who knows how to use Sequelize",
      experience: '2 years',
      contract: 'full-time',
      salary: '30.000',
      company: 'The Coolest job',
      company_description: 'We are a super cool company',
      perks: 'Lovely breakfast and team outings',
      EmployerId: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  {
    id: '2',
    title: 'Front End Developer',
    type: 'Developer',
    description: "Front End Developer with React.js who knows how to use Sequelize",
    experience: '2 years',
    contract: 'full-time',
    salary: '27.000',
    company: 'The Coolest job',
    company_description: 'We are a super cool company',
    perks: 'Lovely breakfast and team outings',
    EmployerId: '',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '3',
    title: 'Back End Developer',
    type: 'Developer',
    description: "Back End Developer with Node.js who knows how to use Sequelize",
    experience: '2 years',
    contract: 'full-time',
    salary: '30.000',
    company: 'The Coolest job',
    company_description: 'We are a super cool company',
    perks: 'Lovely breakfast and team outings',
    EmployerId: '',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '4',
      title: 'Receptionist',
      type: 'Administrative',
      description: "Receptionist for our new office in Barcelona",
      experience: '5 years',
      contract: 'full-time',
      salary: '25.000',
      company: 'Company 1',
      company_description: 'We are a super cool company',
      perks: 'Lovely breakfast and kindergarten tickets',
      EmployerId: '',
      createdAt: new Date(),
      updatedAt: new Date()
},
  {
    id: '5',
    title: 'Bank director',
    type: 'Finance',
    description: "Looking for our new director in Barcelona",
    experience: '15 years',
    contract: 'full-time',
    salary: '90.000',
    company: 'Your Favourite Bank',
    company_description: 'We are a very modern bank',
    perks: 'kindergarten tickets, restaurant tickets, free premium account',
    EmployerId: '',
    createdAt: new Date(),
    updatedAt: new Date()
    }
]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
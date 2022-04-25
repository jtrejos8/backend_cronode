'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Periodicities', [{
        name: 'Diario',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name:'Semanal',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name:'Mensual',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Periodicities', null, {});
  }
};

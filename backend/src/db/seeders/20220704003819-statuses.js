module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'Statuses',
    [
      {
        name: 'Pendente',
      },
      {
        name: 'Em andamento',
      },
      {
        name: 'Concluído',
      },
    ],

    {},
  ),

  down: async (queryInterface) => queryInterface.bulkDelete('Statuses', null, {}),
};

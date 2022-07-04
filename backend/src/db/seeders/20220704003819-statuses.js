module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'statuses',
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

  down: async (queryInterface) => queryInterface.bulkDelete('statuses', null, {}),
};

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'Tasks',
    [
      {
        description: 'Estudar  programação',
        status_id: 1,

      },
    ],

    {},
  ),

  down: async (queryInterface) => queryInterface.bulkDelete('Tasks', null, {}),
};

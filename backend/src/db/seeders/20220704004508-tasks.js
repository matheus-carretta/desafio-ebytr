module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'tasks',
    [
      {
        description: 'Estudar  programação',
        status_id: 1,

      },
    ],

    {},
  ),

  down: async (queryInterface) => queryInterface.bulkDelete('tasks', null, {}),
};


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE from "technology"; ALTER SEQUENCE technology_id_seq RESTART WITH 6;')
    .then(function () {
      var technologies= [{
        id: 1,
        name: 'JavaScript',
        type: 'language',
        note: 'note1',
        examples: ['example1', 'example2'],
        date: '2014-10-20'
      },
      {
        id: 2,
        name: 'Knex.js',
        type: 'library',
        note: 'note1',
        examples: ['example1', 'example2'],
        date: '2017-7-15'
      },
      {
        id: 3,
        name: 'SQL',
        type: 'language',
        note: 'note1',
        examples: ['example1', 'example2'],
        date: '2014-10-25'
      },
      {
        id: 4,
        name: 'jQuery',
        type: 'library',
        note: 'note1',
        examples: ['example1', 'example2'],
        date: '2014-10-25'
      },
      {
        id: 5,
        name: 'HTML',
        type: 'language',
        note: 'note1',
        examples: ['example1', 'example2'],
        date: '2014-10-22'
      }];
      return knex('technology').insert(technologies)
    });
};

(function () {
  'use strict';

  angular
    .module('app')
    .factory('notesFactory', notesFactory)

  notesFactory.$inject = ['$http'];

  function notesFactory($http) {
    var service = {
      getAll: getAll,
      getById: getById,
      create: create,
      update: update,
      remove: remove
    };

    return service;

    function getAll() {
      return $http
        .get('/api/notes')
        .then(function (response) {
          return response.data;
        });
    }

    function getById(id) {
      return $http
        .get('/api/notes/' + id)
        .then(function (response) {
          return response.data;
        });
    }

    function create(note) {
      return $http
        .post('/api/notes', note)
        .then(function (response) {
          return response.data;
        });
    }

    function update() {
      return $http
        .put('/api/notes' + id, note)
        .then(function (response) {
          return response.data;
        });
    }

    function remove(note) {
      return $http
        .delete('/api/notes/' + note.id)
        .then(function (response) {
          return response.data;
        });
    }

  }
})();

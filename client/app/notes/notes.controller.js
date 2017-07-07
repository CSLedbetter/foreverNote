(function () {
  'use strict';

  angular
    .module('app')
    .controller('NotesController', NotesController)

  NotesController.$inject = ['notesFactory'];

  function NotesController(notesFactory) {

    var vm = this;

    activate();

    function activate() {
      notesFactory
        .getAll()
        .then(function (notes) {
          vm.notes = notes;
        });
    }
  }
})();

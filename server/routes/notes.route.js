// REST ACTIONS performed on RESOURCES

const router = require('express').Router();
const db = require('../models');

//GET: /api/notes
router.get('/', function (req, res) {
  db.Note.findAll().then(function (notes) {
    res.json(notes);
  });
});

router.get('/:id', function (req, res) {
  db.Note.findById(req.params.id).then(function (note) {
    if (note === null) {
      res.sendStatus(404);
    } else {
      res.json(note);
    }
  });
});

//POST: /api/notes
router.post('/', function (req, res) {
  const note = db.Note.build(req, res);

  note.save().then(function (newNote) {
    res.send(newNote);
  });
});

// UPDATE
router.put('/:id', function (req, res) {
  db.Note.findById(req.params.id).then(function (note) {
    note.update(req.body).then(function () {
      res.sendStatus(204);
    });
  });
});

// DELETE
router.delete('/:id', function (req, res) {
  db.Note.findById(req.params.id).then(function (note) {
    if (note === null) {
      res.sendStatus(404);
    } else {
      note.destroy().then(function () {
        res.json(note);
      });
    }
  });
});


module.exports = router;

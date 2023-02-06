const { Router } = require("express");
const router = Router();

const {
  renderNoteForm,
  createNewNote,
  renderNotes,
  renderEditForm,
  updateNote,
  deleteNote,
} = require("../controllers/notes.controller");

const { isAuthenticated } = require('../helpers/auth')

//NEW NOTES
router.get("/notes/add", isAuthenticated, renderNoteForm);
router.post("/notes/new-notes", isAuthenticated, createNewNote);

//GET ALL NOTE
router.get("/notes", isAuthenticated, renderNotes);

//EDIT NOTES
router.get("/notes/edit/:id", isAuthenticated, renderEditForm);
router.put("/notes/edit/:id", isAuthenticated, updateNote);

//DELETE NOTE
router.delete("/notes/delete/:id", isAuthenticated, deleteNote);

module.exports = router;

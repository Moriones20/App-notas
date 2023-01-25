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

//NEW NOTES
router.get("/notes/add", renderNoteForm);
router.post("/notes/new-notes", createNewNote);

//GET ALL NOTE
router.get("/notes", renderNotes);

//EDIT NOTES
router.get("/notes/edit/:id", renderEditForm);
router.put("/notes/edit/:id", updateNote);

//DELETE NOTE
router.delete("/notes/delete/:id", deleteNote);

module.exports = router;

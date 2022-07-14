const router = require("express").Router();
const { createEntry, getAllEntries } = require("../Controllers/diaryControllers")

router.post("/entry", createEntry);
router.get("/entry/:id", getAllEntries)

module.exports = router;
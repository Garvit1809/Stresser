const { addMessage, getAllMessages } = require("../Controllers/messageControllers");
const router = require("express").Router();

router.post("/addmsg/", addMessage);
router.post("/getmsg/", getAllMessages);

module.exports = router;
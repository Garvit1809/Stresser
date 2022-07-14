const Messages = require("../Model/messageModel");

module.exports.getAllMessages = async (req, res, next) => {
  try {
    console.log(req.body);
    const { from, to } = req.body;

    const messages = await Messages.find({
      users: {
        $all: [from, to],
      },
    }).sort({ updatedAt: 1 });

    const projectedMessages = messages.map((msg) => {
      return {
        fromSelf: msg.sender.toString() === from,
        message: msg.message.text,
      };
    });
    res.json(projectedMessages);
  } catch(error) {
    next(error);
  }
};

module.exports.addMessage = async (req, res, next) => {
  try {
    console.log(req.body);
    const { from, to, message } = req.body;
    const data = await Messages.create({
      message: { text: message },
      users: [from, to],
      sender: from,
    });

    if (data) return res.json({ msg: "Message added successfully." });
    else return res.json({ msg: "Failed to add message to the database" });
  } catch(error) {
    next(error);
  }
};
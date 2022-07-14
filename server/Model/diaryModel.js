const mongoose = require("mongoose");

const diarySchema = new mongoose.Schema({
  userId: {
    type: String,
  },
  title: {
    type: String,
    required: true,
    min: 2,
    max: 20,
  },
  body: {
    type: String,
    max: 200,
  },
  day: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("DiaryEntry", diarySchema);
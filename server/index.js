const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const socket = require('socket.io');

const userRoutes = require("./Routes/userRoutes")
const messageRoutes = require("./Routes/messageRoutes")
const diaryRoutes = require("./Routes/diaryRoutes")

const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

app.use("/api/auth", userRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/diary", diaryRoutes);

const PORT = process.env.PORT || 5000;
let server;

mongoose
  .connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
  server = app.listen(PORT, () => {
    console.log(`Listening to PORT:- ${process.env.PORT}`);
})
  )
  .catch((error) => console.log(error.message));


const io = socket(server,{
  cors:{
    origin:"http://localhost:3000/",
    credentials: true,
  },
});

global.onlineUsers = new Map();
io.on("connection", (socket) => {
  global.chatSocket = socket;
  socket.on("add-user", (userId) => {
    onlineUsers.set(userId, socket.id);
  });

  socket.on("send-msg", (data) => {
    const sendUserSocket = onlineUsers.get(data.to);
    if (sendUserSocket) {
      socket.to(sendUserSocket).emit("msg-recieve", data.message);
    }
  });
});

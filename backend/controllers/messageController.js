const AsyncHandler = require("express-async-handler");
const Chat = require("../models/chatModel");
const Message = require("../models/messageModel");
const User = require("../models/userModel");

const sendMessage = AsyncHandler(async (req, res) => {
  const { chatId, content } = req.body;
  if (!chatId || !content) {
    res.status(400);
    throw new Error("Invalid message data");
  }

  var newMessage = {
    sender: req.user._id,
    content: content,
    chat: chatId,
  };

  try {
    var message = await Message.create(newMessage);
    message = await message.populate("sender", "firstname lastname pic");
    message = await message.populate("chat");
    message = await User.populate(message, {
      path: "chat.users",
      select: "firstname lastname pic email",
    });

    await Chat.findByIdAndUpdate(req.body.chatId, {
      latestMessage: message,
    });
    res.send(message);
  } catch (error) {
    res.status(400);
    return new Error(error.message);
  }
});

const allMessages = AsyncHandler(async (req, res) => {
  try {
    const messages = await Message.find({ chat: req.params.chatId })
      .populate("sender", "firstname lastname pic email")
      .populate("chat");
    res.send(messages);
  } catch (error) {
    res.status(400);
    return new Error(error.message);
  }
});
module.exports = { sendMessage, allMessages };

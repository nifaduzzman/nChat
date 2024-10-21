const { Schema, default: mongoose } = require("mongoose");

const chatSchema = new Schema({
  user:String,
  message:String
})

const Chat = mongoose.models.Chat || mongoose.model('Chat',chatSchema)

export default Chat;
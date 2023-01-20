const express = require('express');
const dotenv = require('dotenv');
const chats = require('./data/data');


const app = express();
dotenv.config()

const PORT = process.env.PORT;

app.get('/',(req,res) => {
    res.send("API is running successfully!")
})

app.get('/api/chat',(req,res) => {
    res.send(chats)
})

app.get('/api/chat/:id',(req,res) => {
    const singleChat = chats.find(c => c._id === req.params.id)
    res.send(singleChat)
})
app.listen(PORT,console.log(`Hello Everyone from ${PORT}`))
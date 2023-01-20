import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ChatPage = () => {
  
    const [chats, setchats] = useState([])

    const fetchData = async () => {
        const {data} = await axios.get('/api/chat');
        setchats(data)
    }

    useEffect(() => {
        fetchData();
    }, []);
    

    return (
    <div>{chats.map((chats) => 
        <div key={chats._id}>{chats.chatName}</div>)}</div>
  )
}

export default ChatPage
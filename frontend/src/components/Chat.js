import { Avatar, IconButton } from '@material-ui/core'
import React, { useState } from 'react'
import './Chat.css'
import AttachFileIcon from '@material-ui/icons/AttachFile';
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import axios from '../axios'

function Chat({ messages }) {
    const [Input, setInput] = useState('')
    const sendMessage = async(e) => {
        e.preventDefault()
        await axios.post('/messages/new', {
            name: 'faizan',
            message: Input,
            timestamp: "I am a demo timestamp",
            received: false

        })
        setInput('')
    }
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src="https://scontent.fkhi6-1.fna.fbcdn.net/v/t1.0-9/133832334_10157689378027623_8201757333882988089_n.jpg?_nc_cat=111&ccb=2&_nc_sid=730e14&_nc_eui2=AeEZHqhWYJbJecP4hjV-iQBIXCScmbZKnupcJJyZtkqe6mDozG3_jjnJkMV8FkaB7zk2ZtRE7puo1r7t541L4m6Q&_nc_ohc=XGjZ-hD5SgAAX_1VvnG&_nc_ht=scontent.fkhi6-1.fna&oh=5a616126751517474582c183fe29bc6c&oe=6018B1A5" />
                <div className="chat__headerInfo">
                    <h3>Messages</h3>
                    <p>last sceen</p>
                </div>
                <div className="chat__headerRight">

                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>


                </div>

            </div>
            <div className="chat__body">
                {messages.map((message, id) => (
                    <p key={id} className={`chat__message ${message.received && "chat__reciever"}`}>
                        <span className="chat__name">{message.name}</span>
                        {message.message}
                        <span className="chat__timestamp">
                            {message.timestamp}


                        </span>
                    </p>
                ))}

            </div>
            <div className="chat__footer">

                <InsertEmoticonIcon />
                <form>
                    <input value={Input} onChange={(e) => setInput(e.target.value)} placeholder="type message" type="text" />
                    <button onClick={sendMessage} type="submit">submit</button>
                </form>
            </div>

        </div>
    )
}

export default Chat

import React from 'react'
import './Sidebar.css'
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar, IconButton } from '@material-ui/core';
import SidebarChat from './SidebarChat';
function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src="https://scontent.fkhi6-1.fna.fbcdn.net/v/t1.0-9/133832334_10157689378027623_8201757333882988089_n.jpg?_nc_cat=111&ccb=2&_nc_sid=730e14&_nc_eui2=AeEZHqhWYJbJecP4hjV-iQBIXCScmbZKnupcJJyZtkqe6mDozG3_jjnJkMV8FkaB7zk2ZtRE7puo1r7t541L4m6Q&_nc_ohc=XGjZ-hD5SgAAX_1VvnG&_nc_ht=scontent.fkhi6-1.fna&oh=5a616126751517474582c183fe29bc6c&oe=6018B1A5" />
                <div className="sidebar__headerRight">

                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>

                    <IconButton>
                        <ChatIcon />
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>

                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchIcon />
                    <input placeholder="type something" type="text" />
                </div>
            </div>
            <div className="sidebar__chats">
                <SidebarChat />

            </div>
        </div>
    )
}

export default Sidebar

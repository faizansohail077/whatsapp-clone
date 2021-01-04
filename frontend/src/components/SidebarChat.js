import { Avatar } from '@material-ui/core'
import React from 'react'
import './SidebarChat.css'

function SidebarChat() {
    return (
        <div className="sidebarChat">
            <Avatar />
            <div className="sidebarChat__info">
                <h2>Faizan</h2>
                <p>1st app</p>
            </div>

        </div>
    )
}

export default SidebarChat

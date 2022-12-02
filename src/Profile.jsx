import React from "react"
import "./Profile.css"

function Profile() {
    return (
        <div className="Profile">
            <div className="AvatarContainer">
                <img className="Avatar" alt="avatar" src="avatar.png" width="48px" height="48px"></img>
                <span className="Nickname">YunShu</span>
            </div>
        </div>
    )
}

export default Profile
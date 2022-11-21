import React from "react"

const style = {
    marginTop: "32px",
    fontSize: "2rem",
    display: "flex"
}

function Profile() {
    return (
        <div style={style}>
            <img alt="avatar" src="avatar.png" width="48px" height="48px" style={{ borderRadius: "32px", verticalAlign: "sub", marginRight: "12px" }}></img>
            <span>YunShu</span>
        </div>
    )
}

export default Profile
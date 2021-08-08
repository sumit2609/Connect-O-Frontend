import "./closeFriend.css"
import noAvatar from "./noAvatar.png"

export default function CloseFriend({user}) {
    // console.log(user.profilePicture)
    return (
        <div>
            <li className="sidebarFriend">
                <img className="sidebarFriendImg" src={noAvatar} alt=""/>
                <span className="sidebarFriendName">{user.username}</span>
            </li>
        </div>
    )
}

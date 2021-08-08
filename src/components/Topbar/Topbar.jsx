import React from 'react'
import "./topbar.css"
import { Search, Person, Chat, Notifications } from "@material-ui/icons"
import {Link} from "react-router-dom"
import {useContext} from 'react'
import {AuthContext} from '../../context/AuthContext';
import noAvatar from './noAvatar.png' 

export default function Topbar() {
    const user = useContext(AuthContext);
    // console.log(user.user.profilepicture);
    // const history = useHistory();

     return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <Link to="/" style={{textDecoration:"none"}}>
                    <span className="logo">Connect-O</span>
                </Link>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className="searchIcon"/>
                    <input placeholder="Search for friend, post or video" className="searchInput"/>
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <Link to={`/profile/${user.user.username}`}>
                    <img 
                        src={user.user.profilepicture || noAvatar} 
                        alt="profilepic" 
                        className="topbarImg" 
                    />
                </Link>
            </div>
        </div>
    )
}

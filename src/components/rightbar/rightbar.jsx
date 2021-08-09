import { useEffect, useState, useContext } from "react"
import "./rightbar.css"
import Online from "../online/online"
import {Link} from "react-router-dom"
import axios from "axios"
import noAvatar from "./noAvatar.png"
import {AuthContext} from '../../context/AuthContext';
import {Add, Remove} from '@material-ui/icons'
import {Users} from "../../dummydata/dummyData"

export default function Rightbar({user}) {
    const [friends,setFriends] = useState([]);
    const {user:currentUser,dispatch} = useContext(AuthContext);
    const [followed,setFollowed] = useState(currentUser.following.includes(user?.id));

    // useEffect(()=>{
    //     setFollowed(currentUser.following.includes(user?.id))
    // },[currentUser,user.id])

    useEffect(()=>{
        const getFriends = async ()=>{
            try{
                const friendList = await axios.get("https://connect-o.herokuapp.com/api/users/friends/"+user._id);
                // console.log(friendList);
                // console.log(friendList.data);
                setFriends(friendList.data);
            }catch(err){
                console.log(err)
            }
        };
        getFriends();
    },[user]);


    const handleClick = async () => {
        try{
            if(followed){
                await axios.put("https://connect-o.herokuapp.com/api/users/"+user._id+"/unfollow",{userId: currentUser._id});
                dispatch({type:"UNFOLLOW",patload:user._id})
            }else{
                await axios.put("https://connect-o.herokuapp.com/api/users/"+user._id+"/follow",{userId: currentUser._id});
                dispatch({type:"FOLLOW",patload:user._id})
            }
            
        }catch(err){
            console.log(err);
        }
        setFollowed(!followed)
    };

    const HomeRightbar = () =>{
        return(
            <>
                <div className="birthdayContainer">
                    <img src="assets/gift.png" alt="" className="birthdayImg" />
                    <span className="birthdayText"><b>satish kumar</b> and <b>3 other friends</b> have birthday today</span>
                </div>
                <img src="assets/ad.png" alt="" className="rightbarAd" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map(u=>(
                        <Online key={u.id} user={u}/>
                    ))}
                </ul>
            </>
        );
    };

    const ProfileRightbar = () =>{
        return(
            <>
                {user.username !== currentUser.username && (
                    <button className="righbarFollowingButton" onClick={handleClick}>
                        {followed ? "Unfollow" : "Follow"}
                        {followed ? <Remove/> : <Add/>}
                    </button>
                )}
                <h4 className="rightbarTitle">User information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfoValue">{user.city}</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                        <span className="rightbarInfoValue">{user.from}</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship:</span>
                        <span className="rightbarInfoValue">{user.relationship === 1 ? "Single" : user.relationship === 2 ? "Married" : "-"}</span>
                    </div>
                </div>
                <h4 className="rightbarTitle">User friends</h4>
                <div className="rightbarFollowings">
                    {friends.map((friend)=>(
                        <Link to={"/profile/"+friend.username} style={{textDecoration:"none"}} >
                            <div className="rightbarFollowing">
                                <img src={friend.profilepicture || noAvatar} alt="" className="rightbarFollowingImg" />
                                <span className="rightbarFollowingName">{friend.username}</span>
                            </div>
                        </Link>
                    ))}  
                </div>
            </>
        )
    }

    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                {user ? <ProfileRightbar/> : <HomeRightbar/>}
            </div>
        </div>
    )
}

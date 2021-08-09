import "./profile.css"
import Sidebar from '../../components/sidebar/sidebar'
import Topbar from '../../components/Topbar/Topbar'
import Feed from "../../components/feed/feed"
import Rightbar from "../../components/rightbar/rightbar"
import { useEffect, useState } from "react"
import axios from "axios"
import Avatar from "./noAvatar.png"
import Cover from "./noCover.png"
import { useParams } from "react-router"


export default function Profile() {

    const [user, setUser] = useState({});
    // const params = useParams();
    // console.log(params.username)
    const username = useParams().username;
    useEffect(() =>{
        const fetchUser = async () =>{
            const res = await axios.get(`https://connect-o.herokuapp.com/api/users?username=${username}`);
            setUser(res.data);
            console.log(res.data.username);
        };
        fetchUser();
    },[username])

    return (
        <>
        <Topbar/>
        <div className="profile">
            <Sidebar/>
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                        <img src={user.coverpicture || Cover} alt="" className="profileCoverImg" />
                        <img src={user.profilepicture || Avatar} alt="" className="profileUserImg" />
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">{user.username}</h4>
                        <span className="profileInfoDesc">{user.desc}</span>
                    </div>
                </div>
                <div className="profileRightBottom">
                    <Feed username={username} />
                    <Rightbar user={user}/>
                </div>
            </div>
        </div>
        </> 
    )
}

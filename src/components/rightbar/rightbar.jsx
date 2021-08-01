import "./rightbar.css"
import {Users} from "../../dummyData"
import Online from "../online/online"

export default function rightbar({profile}) {
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
                <h4 className="rightbarTitle">User information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfoValue">Ghazibad</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                        <span className="rightbarInfoValue">Uttar pradesh, India</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship:</span>
                        <span className="rightbarInfoValue">Single</span>
                    </div>
                </div>
                <h4 className="rightbarTitle">User friends</h4>
                <div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img src="assets/person/1.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">ramu</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/1.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">ramu</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/1.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">ramu</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/1.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">ramu</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/1.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">ramu</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/1.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">ramu</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/1.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">ramu</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/1.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">ramu</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/1.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">ramu</span>
                    </div>
                </div>
            </>
        )
    }
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                {profile ? <ProfileRightbar/> : <HomeRightbar/>}
            </div>
        </div>
    )
}

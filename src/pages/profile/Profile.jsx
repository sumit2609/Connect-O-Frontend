import "./profile.css"
import Sidebar from '../../components/sidebar/sidebar'
import Topbar from '../../components/Topbar'
import Feed from "../../components/feed/feed"
import Rightbar from "../../components/rightbar/rightbar"


export default function Profile() {
    return (
        <>
        <Topbar/>
        <div className="profile">
            <Sidebar/>
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                        <img src="assets/post/2.jpg" alt="" className="profileCoverImg" />
                        <img src="assets/person/1.jpg" alt="" className="profileUserImg" />
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">Sumit</h4>
                        <span className="profileInfoDesc">Hello my friends</span>
                    </div>
                </div>
                <div className="profileRightBottom">
                    <Feed/>
                    <Rightbar profile/>
                </div>
            </div>
        </div>
        </>
    )
}

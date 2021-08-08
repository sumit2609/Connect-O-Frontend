import "./home.css"
import Sidebar from '../../components/sidebar/sidebar'
import Topbar from '../../components/Topbar/Topbar'
import Feed from "../../components/feed/feed"
import Rightbar from "../../components/rightbar/rightbar"

export default function Home() {
    return (
        <>
        <Topbar/>
        <div className="homeContainer">
            <Sidebar/>
            <Feed/>
            <Rightbar />
        </div>
        </>
    )
}

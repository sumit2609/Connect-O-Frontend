import { useEffect, useState,useContext } from "react";
import "./post.css";
import {MoreVert} from "@material-ui/icons";
import axios from "axios";
import noAvatar from "./noAvatar.png"
import {format} from "timeago.js"
import {Link} from "react-router-dom";
import heartss from "./heart.png"
import likess from "./like.png"
import { AuthContext } from "../../context/AuthContext";


export default function Post({post}) {
    const [like,setLike] = useState(post.likes.length);
    const [isLiked,setIsLiked] = useState(false);
    const [user,setUser] = useState({});
    
    const {user:currentUser} = useContext(AuthContext);

    useEffect(() => {
        setIsLiked(post.likes.includes(currentUser._id));
    },[currentUser._id,post.likes]);

    useEffect(() =>{
        const fetchUser = async () =>{
            const res = await axios.get(`https://connect-o.herokuapp.com/api/users?userId=${post.userId}`);
            setUser(res.data);
        }  
        fetchUser();
    },[post.userId])

    const likeHandler = () =>{
        try{
            axios.put("https://connect-o.herokuapp.com/api/posts/"+post._id+"/like",{userId:currentUser._id})
        }catch(err){
            console.log(err);
        }
        setLike(isLiked?like-1:like+1);
        setIsLiked(!isLiked)
    }
    
    return (        
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to={`profile/${user.username}`}>
                            <img src={user.profilepicture || noAvatar} alt="" className="postProfileImg" />
                        </Link> 
                        <span className="postUserName">{user.username}</span>
                        <span className="postDate">{format(post.createdAt)}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">
                        {post?.desc}
                    </span>
                    <img src={post.img} alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src={likess} className="likeIcon" onClick={likeHandler} alt="" />
                        <img src={heartss} className="likeIcon" onClick={likeHandler} alt="" />
                        <span className="postLikeCounter">{like} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

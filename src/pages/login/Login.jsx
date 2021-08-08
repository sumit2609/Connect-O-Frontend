import { useContext, useRef } from "react";
import "./login.css"
import {loginCall} from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import {CircularProgress} from "@material-ui/core"
import {Link} from 'react-router-dom'

export default function Login() {
    const email = useRef();
    const password = useRef();
    const {isFetching,dispatch} = useContext(AuthContext);

    const handleClick = (e) =>{
        e.preventDefault();
        loginCall(
            {email:email.current.value,password:password.current.value},
            dispatch
        );
    }

    // console.log(isFetching);
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Connect-O</h3>
                    <span className="loginDesc">
                        Connect with friends and the world around you on Connect-O
                    </span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input placeholder="Email" type="email" className="loginInput" ref={email} required/>
                        <input placeholder="Password" type="password" className="loginInput" ref={password} required/>
                        <button className="loginButton" disabled={isFetching} >
                            {isFetching ? <CircularProgress color="white" size="25px"/>:"Log In"}
                        </button>
                        <span className="loginForgot">Forgot Password</span>
                        <Link to="/register" >
                            <button className="loginRegisterButton">
                                {isFetching ? <CircularProgress color="white" size="25px"/>:"Create a New Account"}
                            </button>
                        </Link>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

import { useRef } from "react"
import "./register.css"
import axios from 'axios'
import {Link} from 'react-router-dom'
import {useHistory} from 'react-router'

export default function Register() {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const history = useHistory();

    const handleClick = async (e) =>{
        e.preventDefault();
        if(passwordAgain.current.value !== password.current.value){
            passwordAgain.current.setCustomValidity("Password don't match!");
        }else{
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            };
            try{
                await axios.post("https://connect-o.herokuapp.com/auth/register",user);
                history.push("/login");
            }catch(err){
                console.log(err);
            }
        }
    }

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
                        <input placeholder="Username" className="loginInput" ref={username} required />
                        <input placeholder="Email" className="loginInput" type="email" ref={email} required />
                        <input placeholder="Password" className="loginInput" type="password" ref={password} required />
                        <input placeholder="Password Again" className="loginInput" type="password" ref={passwordAgain} required />
                        <button className="loginButton" type="submit">Sign Up</button>
                        <Link to="/login" >
                            <button className="loginRegisterButton">
                                Login into Account
                            </button>
                        </Link> 
                    </form>
                </div>
            </div>
        </div>
    )
}

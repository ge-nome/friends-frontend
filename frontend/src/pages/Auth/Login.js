import {useState} from "react";
import { Link } from "react-router-dom";
import CommonBtn from "./Acomponents/CommonBtn";
import CommonInput from "./Acomponents/LoginInputes";
import { FcGoogle } from "react-icons/fc";


function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

  
    const loginFun = () => {
        console.log(password, email);
    }
    const googleAuth = () => {
        console.log(password, email);
    }
    return (
        <div className="log-in-container">
            <div className="login-header">
                <h2>Welcome!</h2>
                <small className="text-color">Please sign in your account</small>
            </div>
            <div className="input-sec-holder">
                <CommonInput onChangeFun={setEmail} value={email} label="Email Address" />
                <CommonInput onChangeFun={setPassword} value={password} label="Password" />
                <div className="forgetpass"><Link to="signup" className="footer-link">Forget password?</Link></div>
            </div>

            <div className="button-sec-holder">
                {<CommonBtn onChangeClick={loginFun} label="Sign in" />
                }
                {/*</div>{<button className="enter-btn" ><Link to="/feeds" className="">Sign in</Link></button>*/}
                <button className="enter-btn" ><FcGoogle size={30}/><div style={{margin:10}} /> Sign in with Google</button>
            </div>

            <div className="login-footer">
                <small >Dont have an account <Link to="/signup" className="footer-link">Sign up</Link></small>
            </div>
        </div>
    );
  }

  export default Login;
import {useState} from "react";
import { Link } from "react-router-dom";
import CommonBtn from "./Acomponents/CommonBtn";
import CommonInput from "./Acomponents/LoginInputes";
import { FcGoogle } from "react-icons/fc";


function Register() {

    const [fullName, setFullname] = useState("")
    const [phone, setPhone] = useState("")
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
                <h2>Create Account</h2>
                <small className="text-color">Please fill the form</small>
            </div>
            <div className="input-sec-holder">
                <CommonInput onChangeFun={setFullname} value={fullName} label="Full Name" />
                <CommonInput onChangeFun={setPhone} value={phone} label="Phone Number" />
                <CommonInput onChangeFun={setEmail} value={email} label="Email Address" />
                <CommonInput onChangeFun={setPassword} value={password} label="Password" />
            </div>
            
            <div className="button-sec-holder">
                {//<CommonBtn onChangeClick={loginFun} label="Sign up" />
                }
                <button className="enter-btn" ><Link to="/signin" className="">Sign up</Link></button>
            </div>

            <div className="login-footer">
                <small >Already have an account <Link to="/signin" className="footer-link">Sign in</Link></small>
            </div>
        </div>
    );
  }

  export default Register;
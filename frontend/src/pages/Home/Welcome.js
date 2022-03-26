
import {useState} from "react"
import { Link } from "react-router-dom";
import friends from "../../friends.png"



function Welcome() {  
    return (
        <div className="welcome">
            <div className="img">
                <img src={friends} alt=""></img>
            </div>
            <div className="talk">
                <h1>Chat with friends</h1>
                <h1>Share your feelings</h1>
            </div>
            <div className="get-started">
                <Link to="/signin"><h2>Get Started</h2></Link>
            </div>
           
        </div>
    );
  }

  export default Welcome;
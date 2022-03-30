import {useState} from "react";
import { Link } from "react-router-dom";



function Welcome() {
    return (
        <div className="welcome-message">    
            <div className="">
                <h1>Chat with friends</h1>
                <h1>Share your feelings</h1>
            </div>       
            <div className="get-started"><Link to='/signin' >Get Started</Link></div>  
        </div>
    );
  }

  export default Welcome;
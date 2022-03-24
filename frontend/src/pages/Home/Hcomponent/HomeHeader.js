import {useState} from "react";
import { Link } from "react-router-dom";
import ProfileImg from "./ProfileImg";

function HomeHeader() {


    return (
        <div className="home-header-container">
            <div className="left-side-header">
                <div className="h-hello">Hello,</div>
                <div className="h-Name">MyName</div>
            </div>
            <Link to="/profile"><ProfileImg/></Link>
        </div>
    );
  }

  export default HomeHeader;
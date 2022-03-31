//import {useState} from "react";
//import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";


function ProfileImgPost() {


    return (
       
            <div className="profile-img" style={{background:generateRandomColor()}}>
                         <AiOutlineUser />
            </div>
        
    );
  }

  export default ProfileImgPost;

  function generateRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
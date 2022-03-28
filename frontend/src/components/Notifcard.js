import {useState} from "react";

function Notifcard(props) {
    console.log(props)
    return (
        <div className="notif-card">
            <div className="image">
                <img className="sugg-img" src="image/uimg.jpg" alt=""></img>
            </div>
            <div className="notif-title">{props.name} is feeling {props.feeling}</div>
            <div className="notif-icon">{props.time} mins ago</div>
        </div>
       
        );
    }
   
  

  export default Notifcard;
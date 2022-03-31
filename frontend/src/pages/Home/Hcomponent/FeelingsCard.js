
import { Link } from "react-router-dom";
//import ProfileImg from "./ProfileImg";
import { BsChat } from "react-icons/bs";
//import { useState } from "react";
//import SugestComp from "./SugestComp";
import ProfileImgPost from "./ProfileImgPost";



function Cards({emoji, feelings, date, name, id}) {
    //const [menu, setMenu] = useState(false)
    
    return (
        <div className={`card-component ${feelings}`} >
            
            <ProfileImgPost />
            <div className="write-up">
                <div className="card-date">{dateSpliter(date)}</div>
                <div className="card-emogi">{emoji}</div>
                <div className="card-text">{name} is feeling {feelings}</div>
            </div>
            <Link className="chat-link" to={`/chat/${id}`}><BsChat size={30}/></Link>
        </div>
    );
  }

  export default Cards;




  const dateSpliter=(date)=>{
     const d = new Date(date);
     let h =  d.getHours()
     const m = d.getMinutes()

     

     const fulldate = `${h}:${m}`
     return fulldate
  }
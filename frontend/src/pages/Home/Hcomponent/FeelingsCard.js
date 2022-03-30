
import { Link } from "react-router-dom";
import ProfileImg from "./ProfileImg";
import { AiOutlineMore } from "react-icons/ai";
import { useState } from "react";
import SugestComp from "./SugestComp";



function Cards({emoji, feelings, date, name}) {
    const [menu, setMenu] = useState(false)
    if (menu) {
        return <SugestComp menu={menu} setMenu={ setMenu}/>
   }
    return (
        <div className={`card-component ${feelings}`} >
            
            <ProfileImg />
            <div className="write-up">
                <div className="card-date">{date}</div>
                <div className="card-emogi">{emoji}</div>
                <div className="card-text">{name} is feeling {feelings}</div>
            </div>
            <button onClick={() => setMenu(!menu)}className="more-btn__"><AiOutlineMore size={30}/></button>
        </div>
    );
  }

  export default Cards;
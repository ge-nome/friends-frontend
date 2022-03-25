
import { Link } from "react-router-dom";
import ProfileImg from "./ProfileImg";
import { AiOutlineMore } from "react-icons/ai";



function Cards({emoji, feelings, date, name}) {

   
    return (
        <div className={`card-component ${feelings}`} >
            <ProfileImg />
            <div className="write-up">
                <div className="card-date">{date}</div>
                <div className="card-emogi">{emoji}</div>
                <div className="card-text">{name} is feeling {feelings}</div>

            </div>
        <AiOutlineMore size={30}/>
        </div>
    );
  }

  export default Cards;
import {useState} from "react";
import { Link, } from "react-router-dom";
import {AiOutlinePlaySquare} from "react-icons/ai"

function Suggest(props) {
    return (
        <div className="suggestions">
            <div className="image">
                <img className="sugg-img" src="image/uimg.jpg" alt=""></img>
            </div>
            <div className="sugg-title"><strong>Be happy </strong>(Lucky Dube)</div>
            <div className="sugg-icon"><AiOutlinePlaySquare size={50}/></div>
        </div>
       
        );
    }
   
  

  export default Suggest;
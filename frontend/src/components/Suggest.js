import {useState} from "react";
import { Link, } from "react-router-dom";
import {AiOutlinePlaySquare} from "react-icons/ai"

function Suggest(props) {
    console.log(props)
    return (
        <div className="suggestions">
            <div className="image">
                <img className="sugg-img" src="image/uimg.jpg" alt=""></img>
            </div>
            <div className="sugg-title">{props.title_1} ({props.title_2})</div>
            <div className="sugg-icon"><AiOutlinePlaySquare size={20}/></div>
        </div>
       
        );
    }
   
  

  export default Suggest;
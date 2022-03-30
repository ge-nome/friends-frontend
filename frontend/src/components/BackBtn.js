//import {useState} from "react";
import { useNavigate} from "react-router-dom";
import {AiOutlineArrowLeft} from "react-icons/ai"

function BackBtn({ auth }) {
 
  const nav = useNavigate()
 
    return (
        
          <div className="top-holder"> <button onClick={()=>nav(-1)} className="back-button"><AiOutlineArrowLeft size={40}/></button></div>
       
        );
    }
   
  

  export default BackBtn;
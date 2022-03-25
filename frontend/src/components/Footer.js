//import {useState} from "react";
import { Link,  useLocation } from "react-router-dom";
import { AiFillHome, AiFillMessage, AiFillBell, AiFillProfile, AiFillPlusCircle} from "react-icons/ai";


function Footer({ auth }) {
    const loc = useLocation()
    const cheeckLoc = (p) => {
        if (loc.pathname === p) {
            return true
        }
        return false
    }
   
    if(auth){
    return (
        <div className="footer_nave">
            <Link to="/feeds"><AiFillHome  className={`icons-footer-${cheeckLoc("/feeds")&&"active"}`}  /></Link>
            <Link to="/message"><AiFillMessage className={`icons-footer-${cheeckLoc("/message")&&"active"}`}  /></Link>
            <Link to="/add"><AiFillPlusCircle  className={`icons-footer-${cheeckLoc("/add")&&"active"}`} /></Link>
            <Link to="notification"><AiFillBell className={`icons-footer-${cheeckLoc("/notification")&&"active"}`}  /></Link>
            <Link to="/profile"><AiFillProfile className={`icons-footer-${cheeckLoc("/profile")&&"active"}`} /></Link>
        </div>
        );
    }
    return <div className="not-auth">For the love of it</div>
  }

  export default Footer;
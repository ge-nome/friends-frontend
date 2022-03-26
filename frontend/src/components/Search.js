//import {useState} from "react";
import { Link, } from "react-router-dom";
import {AiOutlineSearch} from "react-icons/ai"

function Search(props) {
    return (
        
      <div className="search-div"><AiOutlineSearch size={30}/><input className="search-input" type="search" placeholder={props.show}/></div>
       
        );
    }
   
  

  export default Search;
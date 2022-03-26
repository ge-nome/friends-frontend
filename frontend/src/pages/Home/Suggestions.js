
import {useState} from "react"
import { Link } from "react-router-dom";
import HomeHeader from "./Hcomponent/HomeHeader";
import Search from "../../components/Search";
import Suggest from "../../components/Suggest";



function Suggestions() {  
    return (
        <div className="home-feed-container bottom-margin">
            <HomeHeader />
            <div className="suggestions-container">
                <Search show={'Sad Mood'}/>
                <div className="choose">
                    <div style={{backgroundColor:"#E64444", color:"white"}}>Music</div>
                    <div>Movies</div>
                    <div>Books</div>
                    <div>Places</div>
                </div>
                <Suggest />
                <Suggest />
                <Suggest />
                <Suggest />
                <Suggest />
            </div>
            
    
           
        </div>
    );
  }

  export default Suggestions;
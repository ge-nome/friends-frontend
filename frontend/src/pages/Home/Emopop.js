
import {useState} from "react"
import { Link } from "react-router-dom";
import Cards from "./Hcomponent/FeelingsCard";
import HomeHeader from "./Hcomponent/HomeHeader";



function Emopop() {
    const [feeling, setFeeling] = useState([{
        name: "Happy",
        emoji:"😊"
    }, {
        name: "Sad",
        emoji:"😔"
    }, {
        name: "Angry",
        emoji:"😡"
    }, {
        name: "Sick",
        emoji:"🤢"
    },{
        name: "Bored",
        emoji:"🥴"
    }])

   
    return (
        <div>Nothing to display</div>
    );
  }

  export default Emopop;
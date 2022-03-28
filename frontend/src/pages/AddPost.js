
import {useState} from "react"
import { Link } from "react-router-dom";
import Cards from "./Hcomponent/FeelingsCard";
import HomeHeader from "./Hcomponent/HomeHeader";



function HomeFeed() {
    const [fellings, setFeelings] = useState([{
       
        feelings:"Happy",
        emoji:"😊"
    }, {
       
        feelings: "Sad",
        emoji:"😔"
    }, {
      
        feelings: "Angry",
        emoji:"😡"
    }, {
       
        feelings: "Sick",
        emoji:"🤢"
    },{
        
        feelings: "Smart",
        emoji:"🧐"
    },{
       
        feelings: "Funny",
        emoji:"🥴"
    }])

   
    return (
        <div className="add-feed-container bottom-margin">
            <HomeHeader />
            

            <div className="card-holder">
                {
                    fellings.map((e, i) => {
                        return (
                            <Cards key={i} name={e.name} date={e.date} feelings={e.feelings} emoji={e.emoji}/>
                        )
                    })
                }
            </div>
    
           
        </div>
    );
  }

  export default HomeFeed;
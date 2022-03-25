
import {useState} from "react"
import { Link } from "react-router-dom";
import Cards from "./Hcomponent/FeelingsCard";
import HomeHeader from "./Hcomponent/HomeHeader";



function HomeFeed() {
    const [users, setUsers] = useState([{
        name: "Musterfa",
        date: "11:12 pm 2 2022",
        feelings:"Happy",
        emoji:"😊"
    }, {
        name: "Latifer",
        date: "3:12 am 3 2022",
        feelings: "Sad",
        emoji:"😔"
    }, {
        name: "Lorico",
        date: "11:12 pm 2 2022",
        feelings: "Angry",
        emoji:"😡"
    }, {
        name: "Tapatapa",
        date: "11:12 pm 2 2022",
        feelings: "Sick",
        emoji:"🤢"
    },{
        name: "Michel",
        date: "11:12 pm 2 2022",
        feelings: "Smart",
        emoji:"🧐"
    },{
        name: "Babilon",
        date: "11:12 pm 2 2022",
        feelings: "Funny",
        emoji:"🥴"
    }])

   
    return (
        <div className="home-feed-container bottom-margin">
            <HomeHeader />
            
            <div className="mood-enter-div"><Link to='/' ><div className="say-mood-div">How You Feeling Today?</div></Link></div>
            <div className="card-holder">
                {
                    users.map((e, i) => {
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
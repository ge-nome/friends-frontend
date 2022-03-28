import {useState} from "react"
//import { Link } from "react-router-dom";
import BackBtn from "../components/BackBtn"
import Cards from "./Home/Hcomponent/FeelingsCard";
//import Footer from "../components/Footer";

function Profile() {
    
    const [users, setUsers] = useState([{
        name: "bash",
        date: "11:12 pm 2 2022",
        feelings:"Happy",
        emoji:"😊"
    }, {
        name: "bash",
        date: "3:12 am 3 2022",
        feelings: "Sad",
        emoji:"😔"
    },
    {
        name: "bash",
        date: "3:12 am 3 2022",
        feelings: "Angry",
        emoji:"😔"
    },
    {
        name: "bash",
        date: "3:12 am 3 2022",
        feelings: "Funny",
        emoji:"😔"
    },])
    return (
        <div className="profile-feed-container bottom-margin">
          <BackBtn/>
            <div className="prof-image">
                <img className="img-profile" src="image/uimg.jpg" alt=""></img>
                <div className="prof-name">
                    <div className="full-name">adam abu</div>
                    <div className="user-name">@bash</div>
                </div>
                <div className="line-seperator" />

                <div className="list-table">
                    {
                        users.map((e,i)=>{
                            return  <Cards key={i} name={e.name} date={e.date} feelings={e.feelings} emoji={e.emoji}/>
                        })
                    }
                </div>
               
                </div>
          
            
        </div>
    );
  }

  export default Profile;
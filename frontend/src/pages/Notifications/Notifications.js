
import {useState} from "react"
import { Link } from "react-router-dom";
import BackBtn from "../../components/BackBtn"
import Notifcard from "../../components/Notifcard";



function Notifications() {
    const [notifications, setNotifications] = useState([{
        name: "Ajiboye",
        date: "13",
        feeling:"bored"
    },
    {
        name: "Tobi",
        date: "14",
        feeling:"happy"
    },
    {
        name: "Musterfa",
        date: "13",
        feeling:"sad"
    },
    {
        name: "Adekunle",
        date: "13",
        feeling:"angry"
    },
    {
        name: "Musterfa",
        date: "13",
        feeling:"sad"
    },
    {
        name: "Adekunle",
        date: "13",
        feeling:"angry"
    },
    {
        name: "Ajiboye",
        date: "13",
        feeling:"bored"
    },
    {
        name: "Tobi",
        date: "14",
        feeling:"happy"
    }
])
    return (
        <div className="message-feed-container bottom-margin">
          <BackBtn/>
            <div className="row-users-search">
                <div className="row-users-search">
                    <div className="message-header bold">Notifications</div>
                    <div className="users-row-holder">
                        {
                            notifications.map((e, i) => {
                                return (
                                    <Notifcard key={i} name={e.name} feeling={e.feeling} time={e.date}/>
                                )
                            })
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    );
  }

  export default Notifications;
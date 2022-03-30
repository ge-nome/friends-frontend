
import {useState} from "react"
import { Link } from "react-router-dom";
import BackBtn from "../../components/BackBtn";
import Search from "../../components/Search";



function Message() {
    const [users, setUsers] = useState([{
        name: "Musterfa",
        date: "11:12",
        message:"how fa"
    },  
    { name: "Michel",
    date: "13:12",
    message:"Yoo sup"},

    { name: "Comrade",
    date: "01:12",
    message:"Bring Garry"},
    { name: "Michel",
    date: "13:12",
    message:"Yoo sup"},

    { name: "Comrade",
    date: "01:12",
    message:"Bring Garry"},
    { name: "Michel",
    date: "13:12",
    message:"Yoo sup"},

    { name: "Comrade",
    date: "01:12",
    message:"Bring Garry"}
])

   
    return (
        <div className="message-feed-container bottom-margin">
          <BackBtn/>
            <Search show="Search"/>
            <div className="row-users-search">
                
                <div className="row-users-search">
                    <div className="message-header">Messages</div>
                    <div className="users-row-holder">
                        {
                            users.map((e, i)=>{
                                return (<Link to="/message_chatid" key={i} className="user-row">
                                           <div className="img-name">
                                                <img className="user-profile" src="image/uimg.jpg" alt="fr"/>
                                                <div className="name-message">
                                                    <div className="name">{e.name}</div>
                                                    <div className="message">{e.message}</div>
                                                </div>
                                            </div>
                                            <div className="message-date">
                                               {e.date}
                                            </div>
                                </Link>)
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
  }

  export default Message;

import {useState} from "react"
import { Link } from "react-router-dom";
import {AiOutlineSearch} from "react-icons/ai"
import BackBtn from "../../components/BackBtn";



function MessageChat() {
    const [users, setUsers] = useState([
        {
            date:"11:11",
            message:`simply because it is pain..`,
            img:"image/uimg.jpg",
            me:false
        },
        {
            date:"11:11",
            message:`sit amet, consectetur, adipisci velit...
            There is no one who loves..`,
            img:"image/uimg.jpg",
            me:true
        },
        {
            date:"11:11",
            message:`Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
            There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..`,
            img:"image/uimg.jpg",
            me:false
        },
        {
            date:"11:11",
            message:`oves pain itself, who seeks after it and wants to have i..`,
            img:"image/uimg.jpg",
            me:true
        },
        {
            date:"11:11",
            message:`Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
          `,
            img:"image/uimg.jpg",
            me:false
        },
])

   
    return (
        <div className="message-feed-container bottom-margin">
          <BackBtn/>
            
            <div className="row-users-search">
                <div className="clear-div"><button className="clear-msg-btn">Clear</button></div>
                <div className="message-div">
                   
                    <div className="users-row-holder">
                        {
                            users.map((e, i)=>{
                                return (<div className={`chat-box-${e.me}`} key={i}>
                               {!e.me && <img className="user-profile" src={"image/user.jpg"} alt="fr"/> }
                                            <div className={`message-text-time-${e.me}`}>
                                                <div className={`text-div-${e.me}`}>{e.message}</div>
                                                <div className={`message-date-${e.me}`}>{e.date}</div>
                                            </div>
                                    </div>)
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
  }

  export default MessageChat;
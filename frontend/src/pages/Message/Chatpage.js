
import {useEffect, useState} from "react"
import { Link, useParams, useNavigate } from "react-router-dom";
//import {AiOutlineSearch} from "react-icons/ai"
import BackBtn from "../../components/BackBtn";
//import ProfileImg from "../Home/Hcomponent/ProfileImg";
import io from "socket.io-client"
import { connect } from "react-redux";
import { conversation, sendMessages } from "../../actions/messages";


function MessageChat(props) {
    const [message, setMessage]=useState("")
    const [socket, setSocket]=useState(null)
    const [users, setUsers] = useState([
        { date:"11:11",
            message:`no messages..`,
            img:"image/uimg.jpg",
            me:false
        },])
    const params = useParams()
    const uid = params.id
    const nav = useNavigate()
    const myid = props.auth.user._id
    if(uid === myid){
        nav("/feeds")
    }
    useEffect(() => {
        props.conversation({myId:myid, yourId:uid})
      }, [myid, uid]);

      useEffect(() => {
       setUsers(props.auth.messages)
       console.log(props.auth.messages)
      }, [props.auth.messages]);

    useEffect(() => {
        const newSocket = ""//io(`https://real-time-api.herokuapp.com/`);
        setSocket(newSocket);
        return () => newSocket.close();
      }, [setSocket]);

      useEffect(() => {
       if(socket){
           console.log("connected")
            socket.on("sayHello", data=>{
                console.log(data)
            })
       }
      }, [socket]);


      //send message
    
      const sendMessage=()=>{
         
        props.sendMessages({text:message, senderId:myid, conversationId:props.auth.conversation._id },props.auth.conversation._id);

        if(socket){
           
             socket.emit("private message", { message, uid, myid })
        }
        setMessage("")
      }


    

   
    return (
        <div className="message-feed-container bottom-margin">
          <BackBtn/>
            
            <div className="row-users-search">
                <div className="clear-div"><button className="clear-msg-btn">Clear</button></div>
                <div className="message-div">
                   
                    <div className="users-row-holder">
                        {
                            users.map((e, i)=>{
                                return (<div className={`chat-box-${e.senderId===myid?true:false}`} key={i}>
                               {!e.senderId===myid&& <div className="user-profile" src={"image/user.jpg"} alt="fr"/> }
                                            <div className={`message-text-time-${e.senderId===myid?true:false}`}>
                                                <div className={`text-div-${e.senderId===myid?true:false}`}>{e.text}</div>
                                                <div className={`message-date-${e.senderId===myid?true:false}`}>{dateSpliter(e.createdAt)}</div>
                                            </div>
                                    </div>)
                            })
                        }
                    </div>
               
                </div>
                <div className="message-input">
                    <input onChange={(e)=>{setMessage(e.target.value)}} value={message} placeholder="Send message"  type="text" className="enter-message"/>
                    <button onClick={sendMessage}className="send-message">Send</button>
                </div>
            </div>
        </div>
    );
  }


  
  //export default MessageChat;
  
  const mapStateToProps = ( state ) => ({
    auth: state.auth,
    errors: state.errors,
    posts: state.posts
  });

  export default connect( mapStateToProps, {conversation, sendMessages} )( MessageChat );
 

  
  
  const dateSpliter=(date)=>{
    const d = new Date(date);
    let h =  d.getHours()
    const m = d.getMinutes()

    

    const fulldate = `${h}:${m}`
    return fulldate
 }
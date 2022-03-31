
import {useEffect, useState} from "react"
import { Link } from "react-router-dom";
import BackBtn from "../../components/BackBtn";
import Search from "../../components/Search";
import ProfileImg from "../Home/Hcomponent/ProfileImg";
import { connect } from "react-redux";
import { getConversations } from "../../actions/messages";



function Message(props) {


    const [users, setUsers] = useState([{
        name: "Musterfa",
        date: "11:12",
        message:"how fa"
    },]);

    useEffect(()=>{
        props.getConversations()
    },[])

    useEffect(()=>{
        console.log(props)
    },[props.auth])

   
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
                                                <ProfileImg/>
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


    
  const mapStateToProps = ( state ) => ({
    auth: state.auth,
    errors: state.errors,
    posts: state.posts
  });

  export default connect( mapStateToProps, {getConversations} )( Message );
 
  

import {useEffect, useState} from "react"
import { Link } from "react-router-dom";
import BackBtn from "../../components/BackBtn";
import Search from "../../components/Search";
import ProfileImg from "../Home/Hcomponent/ProfileImg";
import { connect } from "react-redux";
import { getConversations } from "../../actions/messages";
import ProfileImgPost from "../Home/Hcomponent/ProfileImgPost";
import Loading from "../../components/Loadding";



function Message(props) {


    const [users, setUsers] = useState([]);

    useEffect(()=>{
        props.getConversations()
    },[])

    useEffect(()=>{
        console.log(props.auth)
        setUsers(props.auth.friends)
    },[props.auth.friends])

   if(props.auth.loading){
     return  <Loading/>
   }
    return (
        <div className="message-feed-container bottom-margin">
          <BackBtn/>
            <Search show="Search"/>
            <div className="row-users-search">
                
                <div className="row-users-search">
                    <div className="message-header">Messages</div>
                    <div className="users-row-holder">
                        {
                           users.length > 1 ? users.map((e, i)=>{
                              console.log(e.members)
                                //console.log(e.members[1]):console.log(e.members[0])

                                
                                return (<Link to={`/chat/${e.members[0]._id === props.auth.user._id?e.members[1]._id:e.members[0]._id}`} key={i} className="user-row">
                                           <div className="img-name">
                                                <ProfileImgPost/>
                                                <div className="name-message">
                                                    <div className="name">{e.members[0]._id === props.auth.user._id?e.members[1].username:e.members[0].username}</div>
                                                    <div className="message">{e.lastMessage}</div>
                                                </div>
                                            </div>
                                            <div className="message-date">
                                               {e.date}
                                            </div>
                                </Link>)
                            }) :<div></div>
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
 
  
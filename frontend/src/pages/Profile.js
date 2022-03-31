import {useState, useEffect} from "react"
import { connect } from "react-redux";
//import { Link } from "react-router-dom";
import BackBtn from "../components/BackBtn"
import CardsProfile from "./Home/Hcomponent/FeelingCardProfile";
import { clearAuth, } from "../actions/auth";
import { getMyPosts,  } from "../actions/post";


function Profile(props) {
    
    const [users, setUsers] = useState([{
        name: "bash",
        date: "11:12 pm 2 2022",
        feelings:"Happy",
        emoji:"😊"
    },])

    useEffect((e)=>{
        props.getMyPosts()
            
    },[]);   
    
    useEffect((e)=>{
     //  console.log(props.myposts.mypost)
       setUsers(props.myposts.mypost)
    }, [props.myposts]);

    return (
        <div className="profile-feed-container bottom-margin">
          <BackBtn/>
            <div className="prof-image">
                <img className="img-profile" src="image/uimg.jpg" alt=""></img>
                <div className="prof-name">
                    <div className="full-name">{props.auth.user.fullname}</div>
                    <br/>
                    <div>Posts:{users.length}</div>
                    <br/>
                    <div className="user-name">@{props.auth.user.username}</div>
                    <br/>
                    <button onClick={()=>{props.clearAuth()}} className="clear-msg-btn">Log out</button>
                </div>
                <div className="line-seperator" />

                <div className="list-table">
                    {
                        users.map((e,i)=>{
                            return  <CardsProfile key={i} id={e._id} name={e.username} date={e.createdAt} feelings={e.message} emoji={e.emoji}/>
                        })
                    }
                </div>
               
                </div>
          
            
        </div>
    );
  }


  
  const mapStateToProps = ( state ) => ({
    auth: state.auth,
    errors: state.errors,
    myposts: state.posts
  });

  export default connect( mapStateToProps, {clearAuth, getMyPosts, } )( Profile );
 
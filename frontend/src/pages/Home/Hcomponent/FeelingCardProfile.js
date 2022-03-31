
import { Link } from "react-router-dom";
//import ProfileImg from "./ProfileImg";
import { MdDelete } from "react-icons/md";
//import { useState } from "react";
//import SugestComp from "./SugestComp";
import ProfileImgPost from "./ProfileImgPost";
import { connect } from "react-redux";
import { deletePost } from "../../../actions/post";


function CardsProfile({emoji, feelings, date, name, deletePost, id}) {
    //const [menu, setMenu] = useState(false)
    
    return (
        <div className={`card-component ${feelings}`} >
            
            <ProfileImgPost />
            <div className="write-up">
                <div className="card-date">{dateSpliter(date)}</div>
                <div className="card-emogi">{emoji}</div>
                <div className="card-text">{name} is feeling {feelings}</div>
            </div>
            <button onClick={()=>{deletePost(id)}} className="chat-delete" ><MdDelete size={40}/></button>
        </div>
    );
  }

  //export default ;

  const mapStateToProps = ( state ) => ({
    auth: state.auth,
    errors: state.errors,
    posts: state.posts
  });

  export default connect( mapStateToProps, {deletePost} )( CardsProfile );


  const dateSpliter=(date)=>{
     const d = new Date(date);
     let h =  d.getHours()
     const m = d.getMinutes()

     

     const fulldate = `${h}:${m}`
     return fulldate
  }

import {useEffect, useState} from "react"
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getPosts } from "../../actions/post";
import Cards from "./Hcomponent/FeelingsCard";
import HomeHeader from "./Hcomponent/HomeHeader";



function HomeFeed(props) {
    const [users, setUsers] = useState([])

   useEffect(()=>{
        props.getPosts()
        
   },[])

   useEffect(()=>{
   if(props.posts.post){
    setUsers(props.posts.post)
   }
   
},[props.posts.post])

   
    return (
        <div className="home-feed-container bottom-margin">
            <HomeHeader />
            
            <div className="mood-enter-div"><Link to='/add' ><div className="say-mood-div">How Are You Feeling Today?</div></Link></div>
            <div className="card-holder">
                {
                    users.map((e, i) => {
                        return (
                            
                               <Cards key={i} name={e.username} date={e.createdAt} feelings={e.message} emoji={e.emoji} id={e.userId} />
                            
                        )
                    })
                }
            </div>
    
           
        </div>
    );
  }
 const mapStateToProps = ( state ) => ({
    auth: state.auth,
    errors: state.errors,
    posts: state.posts
  });

  export default connect( mapStateToProps, {getPosts} )( HomeFeed );
 
  //export default HomeFeed;
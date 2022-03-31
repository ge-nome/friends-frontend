
import {useState} from "react"
import {useNavigate} from "react-router-dom"
import HomeHeader from "./Home/Hcomponent/HomeHeader";
import { connect } from 'react-redux';
import SugestComp from "./Home/Hcomponent/SugestComp";
import { addPostFeeling,  getPosts } from "../actions/post";



function AddPost(props) {
  //  const [sug_, showSug] = useState(true)
  const nav = useNavigate()
    const [menu, setMenu] = useState(false)
    const [fellings, setFeelings] = useState([{
        feelings:"Happy",
        emoji:"😊"
    }, {
        feelings: "Sad",
        emoji:"😔"
    }, {
      
        feelings: "Angry",
        emoji:"😡"
    }, {
       
        feelings: "Sick",
        emoji:"🤢"
    },{
        
        feelings: "Smart",
        emoji:"🧐"
    },{    
        feelings: "Funny",
        emoji:"🥴"
    }])



    const sendPost = (e)=>{
        console.log(e)
        props.addPostFeeling(e)
        setMenu(!menu)
        const mp = props.getPosts()
        
        setTimeout(() => {
            nav("/suggestions")
        }, 1000);
            
        
    }
   
    return (
        <div className="add-feed-container bottom-margin">
        <HomeHeader />
            
          {
          // menu && <SugestComp menu={menu} setMenu={ setMenu}/> 
          }
            
            <div className="card-holder">
                {
                    fellings.map((e, i) => {
                        return (
                            <button onClick={()=>sendPost({message:e.feelings, emoji:e.emoji})} className="select-felling" key={i} >
                                <div className="select-text-post">{e.feelings}</div>
                                <div className="select-emoji-post">{e.emoji}</div>
                            </button>
                        )
                    })
                }
            </div>
    
           
        </div>
    );
  }

  const mapStateToProps = ( state ) => ({
    auth: state.auth,
    errors: state.errors
  });

  export default connect( mapStateToProps, {addPostFeeling,  getPosts} )( AddPost );
 
  //export default AddPost;
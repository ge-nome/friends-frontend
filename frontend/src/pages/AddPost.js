
import {useState} from "react"
import HomeHeader from "./Home/Hcomponent/HomeHeader";




function AddPost() {
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

   
    return (
        <div className="add-feed-container bottom-margin">
            <HomeHeader />
            

            <div className="card-holder">
                {
                    fellings.map((e, i) => {
                        return (
                            <div className="select-felling" key={i} >
                                <div>{e.feelings}</div>
                                <div>{e.emoji}</div>
                            </div>
                        )
                    })
                }
            </div>
    
           
        </div>
    );
  }

  export default AddPost;
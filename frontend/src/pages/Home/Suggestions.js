
import {useState} from "react"
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import HomeHeader from "./Hcomponent/HomeHeader";
import Search from "../../components/Search";
import Suggest from "../../components/Suggest";
import Footer from "../../components/Footer";



function Suggestions() { 
    const [music, setMusic] = useState([{
        image: "Musterfa",
        title_1: "Lucky Dube",
        title_2: "No woman no cry"
        },  
        {
        image: "Musterfa",
        title_1: "Osita Osadebe",
        title_2: "Osondi Owendi"
        },
        {
        image: "Musterfa",
        title_1: "Fire Boy",
        title_2: "Peru"
        }
        ,
        {
        image: "Musterfa",
        title_1: "2baba",
        title_2: "Implication"
        }
        ,
        {
        image: "Musterfa",
        title_1: "Buju",
        title_2: "Finess"
        }
        ,
        {
        image: "Musterfa",
        title_1: "Davido",
        title_2: "Champion Sound"
        }
        
    ]) 
    const [books, setBooks] = useState([{
        image: "Musterfa",
        title_1: "Lucky Dube",
        title_2: "No woman no cry"
        },  
        {
        image: "Musterfa",
        title_1: "Osita Osadebe",
        title_2: "Osondi Owendi"
        },
        {
        image: "Musterfa",
        title_1: "Fire Boy",
        title_2: "Peru"
        }
        ,
        {
        image: "Musterfa",
        title_1: "2baba",
        title_2: "Implication"
        }        
    ])
    return (
        <div className="home-feed-container bottom-margin">
            <HomeHeader />
            <div className="suggestions-container">
                <Search show={'Sad Mood'}/>
                <Tabs className="choose">
                    <TabList>
                        <Tab>Music</Tab>
                        <Tab>Movies</Tab>
                        <Tab>Books</Tab>
                        <Tab>Places</Tab>
                    </TabList>
                    <TabPanel>
                    {
                        music.map((e, i) => {
                            return (
                                <Suggest key={i} image={e.image} title_1={e.title_1} title_2={e.title_2}/>
                            )
                        })
                    }
                    </TabPanel>
                    <TabPanel></TabPanel>
                    <TabPanel>
                    {
                        books.map((e, i) => {
                            return (
                                <Suggest key={i} image={e.image} title_1={e.title_1} title_2={e.title_2}/>
                            )
                        })
                    }
                    </TabPanel>
                </Tabs>
                
            </div>
            <Footer />
    
           
        </div>
    );
  }

  export default Suggestions;
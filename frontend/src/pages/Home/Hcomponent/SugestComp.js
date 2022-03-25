import {useState} from "react";
import { Link } from "react-router-dom";
import ProfileImg from "./ProfileImg";
import { connect } from 'react-redux';

function SugestComp({auth, menu, setMenu}) {

    return (
        <div className="sugest-header-container">
            <button onClick={()=>setMenu(!menu)} className="cancel-btn__">Cancel</button>
            <div>More</div>
            <Link to="/profile">Chat Up</Link>
            <Link to="/profile">Movies</Link>
            <Link to="/profile">Music</Link>
            
        </div>
    );
  }

  const mapStateToProps = ( state ) => ({
    auth: state.auth,
    errors: state.errors
  });

  export default connect( mapStateToProps, )( SugestComp );
  
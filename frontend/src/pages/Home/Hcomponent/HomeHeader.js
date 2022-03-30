import {useState} from "react";
import { Link } from "react-router-dom";
import ProfileImg from "./ProfileImg";
import { connect } from 'react-redux';

function HomeHeader({auth}) {


    return (
        <div className="home-header-container">
            <div className="left-side-header">
                <div className="h-hello">Hello,</div>
                <div className="h-Name">{ auth.user.username}</div>
            </div>
            <Link to="/profile"><ProfileImg/></Link>
        </div>
    );
  }

  const mapStateToProps = ( state ) => ({
    auth: state.auth,
    errors: state.errors
  });

  export default connect( mapStateToProps, )( HomeHeader );
  
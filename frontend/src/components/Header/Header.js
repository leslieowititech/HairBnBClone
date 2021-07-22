import React from 'react';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import LoginSignup from './LoginSignup';
// import { Route, Switch } from "react-router-dom";

import './Header.css';

export const Header = () => {
  const logoUrl = '/images/logo.png';
  const history = useHistory();

  const reddirect = () => {
    history.push('/login')
  }

  const loginSignup = () => {
    return (
      <LoginSignup/>
    )
  }


    return (
        <div className="header">
          <div className="logo-div">
              <NavLink exact to="/"><img src={logoUrl} alt="logo" className="logo"/></NavLink>
          </div>
          <div className="middle-nav-div">
            <nav className="middle-nav">
              <li className="header-li">Hair Spots</li>
              <li className="header-li">Experiences</li>
            </nav>
          </div>       
          <div className="right-nav-div">
            <nav className="right-nav">
              <li className="header-li">List your Spot</li>
              <li className="header-li">🌐</li>
              <li className="header-li">
                <button 
                     className="nav-button"
                     onClick={reddirect}
                >
                  <div>&#9776;</div>
                  <div className="profileIcon-div"
                     
                    onClick={loginSignup} 
                     >
                    <img src="images/profileIcon.jpg" alt="profileImageIcon" className="profile-icon"/>
                  </div>
                </button>
               </li>
            </nav>
          </div>                 
          </div>
    )
}
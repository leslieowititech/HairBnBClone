import React from 'react';
import { NavLink } from 'react-router-dom';
import LoginSignup from './LoginSignup';

import './Header.css';

export const Header = ({isLoaded}) => {
  const logoUrl = '/images/logo.png'; 


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
                <button className="nav-button"                     
                >
                  <div>&#9776;</div>
                  <div className="profileIcon-div">
                    <img src="images/profileIcon.jpg" alt="profileImageIcon" className="profile-icon"/>
                  </div>
                </button>
               </li>
            </nav>
          </div>                 
          </div>
    )
}
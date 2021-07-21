import React from 'react';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';

import './Header.css';

export const Header = () => {
  const logoUrl = 'http://assets.stickpng.com/images/580b57fcd9996e24bc43c513.png';
  const history = useHistory();

  const reddirect = () => {
    history.push('/login')
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
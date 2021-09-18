import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState} from 'react';
import LoginSignup from './LoginSignup';
import AddLocationModal from '../LocationModal';


import './Header.css';

export const Header = ({isLoaded}) => {
  const logoUrl = '/images/logo.png';
  const progileIconUrl = '/images/profileIcon.jpg'
  const [isClicked, setClicked] = useState(false);
  
    return (
        
        <div className="header"> 
          {isClicked && <LoginSignup isLoaded={isLoaded}/>}        
          <div className="logo-div">
              <NavLink exact to="/"><img src={logoUrl} alt="logo" className="logo"/></NavLink>
          </div>
          <div className="middle-nav-div">
            <nav className="middle-nav">
            <li className="header-li"><NavLink to='/locations'>Hair Spots</NavLink></li>
              <li className="header-li">Experiences</li>
            </nav>
          </div>       
          <div className="right-nav-div">
            <nav className="right-nav">
              <li className="header-li"><AddLocationModal/></li>
              <li className="header-li">🌐</li>
              <li className="header-li">
                <button 
                   className="nav-button" 
                   onClick={isClicked ? ()=>setClicked(false) : ()=>setClicked(true)}
                   type='submit'                   
                >
                  <div>&#9776;</div>
                  <div className="profileIcon-div">
                    <img src={progileIconUrl} alt="profileImageIcon" className="profile-icon"/>
                  </div>
                </button>
               </li>
            </nav>
          </div>                 
          </div>
    )
}
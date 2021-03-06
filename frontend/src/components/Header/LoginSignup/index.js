import React from 'react';
import {NavLink} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import * as sessionActions from '../../../store/session';
import LoginFormModal from '../../Forms/LoginFormModal';
import ProfileButton from '../../Navigation/ProfileButton';
import './LoginSignup.css';
import AddLocationModal from '../../Forms/LocationModal';

const LoginSignup = ({isLoaded}) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

   const payloadForDemo= {
       credential: "demo@user.io",
       password: 'password'
   }
    const logDemoIn = () => {   
        return dispatch(sessionActions.login( payloadForDemo ))
    };

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser} />
        );
    } else {
        sessionLinks = (
            <>
                <LoginFormModal />
                <li>

                <NavLink to="/signup">Sign Up</NavLink>
                </li>
            </>
        );
    }
    return (
        <div className="login-signup-div">
            <div className='login-signup-demo-links'>
                
                {isLoaded && sessionLinks}
                <li><button className='demo-user-button' onClick={logDemoIn}>Demo User</button></li>
            </div>
            <div className='login-signup-help-list-yourspot'>
                <li><AddLocationModal/></li>
                <li>Help</li>
            </div>
        </div>
    )
}

export default LoginSignup;
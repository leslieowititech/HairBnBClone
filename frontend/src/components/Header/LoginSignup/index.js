import React from 'react';
import {NavLink} from 'react-router-dom';
import {useSelector} from 'react-redux';
import LoginFormModal from '../../LoginFormModal';
import ProfileButton from '../../Navigation/ProfileButton';

import './LoginSignup.css';

const LoginSignup = ({isLoaded}) => {
    const sessionUser = useSelector(state => state.session.user);

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
                <li>Demo User</li>
            </div>
            <div className='login-signup-help-list-yourspot'>
                <li>List your spot</li>
                <li>Help</li>
            </div>
        </div>
    )
}

export default LoginSignup;
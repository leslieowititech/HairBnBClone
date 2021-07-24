import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import * as sessionActions from '../../../store/session'
import LoginFormModal from '../../LoginFormModal';
import ProfileButton from '../../Navigation/ProfileButton';

import './LoginSignup.css';

const LoginSignup = ({isLoaded}) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [credential, setCredential] = useState("demo@mail.com");
    const [password, setPassword] = useState("password");
    const [errors, setErrors] = useState([]);

   
    const logDemoIn = () => {   
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password })).catch(
            async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            }
        );
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
                <li>List your spot</li>
                <li>Help</li>
            </div>
        </div>
    )
}

export default LoginSignup;
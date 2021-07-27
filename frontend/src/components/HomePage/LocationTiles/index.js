import React, {useEffect} from 'react';
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from 'react-router';
import * as locationActions from '../../../store/location';

import './LocationTiles.css'

const LocationTiles = () => {
    // const history = useHistory()
    const dispatch = useDispatch();
    const locations = useSelector(state => state.location) 
   
    const locationsArray = Object.values(locations);
        
        useEffect(() => {           
            dispatch(locationActions.findPlaces())
        
        },[dispatch])
       

    return (
        <div className='tile-div'>
            <h1>Explore nearby</h1>
            <div className='tiles'>
            {locationsArray.map(location => (
                <li key={location?.id}>
                    <NavLink to={`/locations/${location.state}`}>
                        <div className='tile-image'>image</div>
                        {location?.state}
                    </NavLink>
                </li>
            ))}
            </div>
            
        </div>
    )
}

export default LocationTiles;
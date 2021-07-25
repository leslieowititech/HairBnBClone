import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";

import * as locationActions from '../../../store/location';
import './LocationsInState.css';

const LocationsInState = () => {
    const dispatch = useDispatch();
    const locations = useSelector(state => state.location);
    const locationsArray = Object.values(locations);

    const {state }= useParams();
    const pageLocations = locationsArray.filter(location => location.state === state);
    console.log(pageLocations, 'testing')
  
    useEffect(() => {
        dispatch(locationActions.findPlaces())
    }, [dispatch])

    return (
        <div className='hair-spots-div'>
            <h1>Hair spots in {state}</h1>
           
                {pageLocations.map(location => (                    
                    <NavLink to={`/locations/${location.id}`} key={location.id}>
                        <div className='hair-spot'>
                            <div className='hair-spot-img'>image</div>
                            <div>
                                {location.name}
                                {`$${location.price}`}
                            </div>
                        </div>
                    
                    </NavLink>
                ))}
            
        </div>
    )
}

export default LocationsInState
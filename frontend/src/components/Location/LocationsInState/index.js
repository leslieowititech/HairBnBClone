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
    const user = useSelector(state => state.session.user);
    console.log(user.id, 'userid')

    const renderEditDelete = () => {
        return (
            <>
                <button>Edit</button>
                <button>Delete</button>
            </>
        )
    }
    

    const { state }= useParams();
    const pageLocations = locationsArray
   
  
    useEffect(() => {
        dispatch(locationActions.findPlacesByState())      
    }, [dispatch])

    return (
        <div className='hair-spots-div'>
            <h1>Hair spots in {state}</h1>
           
                {pageLocations.map(location => (                    
                    <NavLink to={`/locations/${state}/${location.id}`} key={location.id}>
                        <div className='hair-spot'>
                            <div className='hair-spot-img'>image</div>
                            <div>
                                {location.name}
                                {`$${location.price} `}
                               
                                {location.userId === user.id ? renderEditDelete() : null}
                            </div>                       
                       
                        </div>
                    
                    </NavLink>
                ))}
            
        </div>
    )
}

export default LocationsInState
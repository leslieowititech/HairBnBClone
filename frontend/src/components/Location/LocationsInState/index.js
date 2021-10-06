import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";

import * as locationActions from '../../../store/location';
import * as sessionActions from '../../../store/session';
import './LocationsInState.css';

const LocationsInState = () => {
    const { stateName }= useParams();
    const dispatch = useDispatch();
    const locations = useSelector(state => state.location).filter(location => {
        return location.state === stateName
    });
    
    const user = useSelector(state => state.session.user);

    const renderEditDelete = (state, id, location) => {
        const handleDelete = () => {
            dispatch(locationActions.deleteAPlace(state, id, location))
        }
        return (
            <div className='edit-and-delete-buttons-div'>
                <button className='button'>Edit</button>
                <button className='button' onClick={handleDelete}>Delete</button>
            </div>
        )
    }
    


    
    

    

    const getImageUrl = (imageArray, locationId) => {
        let url = '';
        for (let i = 0; i < imageArray.length; i++) {
            let image = imageArray[i]
            if (image.locationId === locationId) {
                url = image.url
                break;
            }
        }
        return url;
    }
     
 
    useEffect(() => {
        dispatch(locationActions.findPlacesByState(stateName))  
        dispatch(sessionActions.restoreUser())   
    }, [dispatch,stateName])

    return (
        <div className='hair-spots-div'>
            <h1>Hair spots in {stateName}</h1>
           
            {locations.map((location) => (
                <div className='hair-spot' key={location?.id}>
                            <Link to={`/locations/${stateName}/${location.id}`} >
                                <div className='hair-spot-img'>
                                    {location.Images?.length &&
                                        <img src={getImageUrl(location.Images, location.id)} alt={getImageUrl(location.Images, location.id)} className='tile-image-pic'/>
                                    }
                                </div>
                            </Link>
                            <div>
                                {location.name}
                                {`$${location.price} `}
                                {location.userId === user?.id ? renderEditDelete(location.state, location.id, location) : null}
                            </div>                       
                       
                        </div>
                    
                    
                ))}
            
        </div>
    )
}

export default LocationsInState
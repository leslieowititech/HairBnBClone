import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";

import * as locationActions from '../../../store/location';
import * as imageActions from '../../../store/image';
import * as sessionActions from '../../../store/session';
import './LocationsInState.css';

const LocationsInState = () => {
    const { stateName }= useParams();
    const dispatch = useDispatch();

    const locations = useSelector(state => state.location).filter(location => {
        return location.state === stateName
    });
    
    const images = useSelector(state => state.image)
    
    const user = useSelector(state => state.session.user);

    const renderEditDelete = (state, id) => {
        const handleDelete = () => {
            dispatch(locationActions.deleteAPlace(state, id))
        }
        return (
            <div className='edit-and-delete-buttons-div'>
                <button className='button'>Edit</button>
                <button className='button' onClick={handleDelete}>Delete</button>
            </div>
        )
    }
    


    
    

    const addImages = () => {
        let res = []
        for (let i = 0; i < locations.length; i++) {//pair a location with an image
            let location = locations[i];
            for (let j = 0; j < images?.length; j++) {
                let image = images[j];

                if (image.locationId === location?.id) {

                    if (!res.includes(location)) {
                        location.image = image
                        res.push(location)
                    }
                }
            }
        }
        // console.log(res, 'here')
        return res;
    }

    const locationsWithimages = addImages();
   
  
    useEffect(() => {
        dispatch(locationActions.findPlacesByState(stateName))  
        dispatch(imageActions.findImages()) 
        dispatch(sessionActions.restoreUser())   
    }, [dispatch,stateName])

    return (
        <div className='hair-spots-div'>
            <h1>Hair spots in {stateName}</h1>
           
            {locationsWithimages.map(location => (
                <div className='hair-spot' key={location?.id}>
                            <Link to={`/locations/${stateName}/${location.id}`} >
                                <div className='hair-spot-img'>
                                <img src={location.image.url} alt={location.image.url} className='tile-image-pic'/>
                                </div>
                            </Link>
                            <div>
                                {location.name}
                                {`$${location.price} `}
                                {location.userId === user?.id ? renderEditDelete(location.state, location.id) : null}
                            </div>                       
                       
                        </div>
                    
                    
                ))}
            
        </div>
    )
}

export default LocationsInState
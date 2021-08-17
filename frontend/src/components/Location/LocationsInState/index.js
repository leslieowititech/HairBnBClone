import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";

import * as locationActions from '../../../store/location';
import * as imageActions from '../../../store/image';
import * as sessionActions from '../../../store/session';
import './LocationsInState.css';

const LocationsInState = ({isLoaded}) => {
    const { stateName }= useParams();
    const dispatch = useDispatch();

    const locations = useSelector(state => state.location);
    const images = useSelector(state => state.image)
    const locationsArray = Object.values(locations).filter(location => {
        return location.state === stateName
    })
    const imagesArray = images.image;
    const user = useSelector(state => state.session.user);
    // console.log(user.id, 'userid')

    const renderEditDelete = () => {
        return (
            <div className='edit-and-delete-buttons-div'>
                <button className='button'>Edit</button>
                <button className='button'>Delete</button>
            </div>
        )
    }
    


    
    

    const getlocation = () => {
        let locations = []

        for (let i = 0; i < locationsArray.length; i++) {//pair a location with an image
            let location = locationsArray[i];
            for (let j = 0; j < imagesArray?.length; j++) {
                let image = imagesArray[j];

                if (image.locationId === location.id) {

                    if (!locations.includes(location)) {
                        location.image = image
                        locations.push(location)
                    }
                }
            }
        }
        return locations;
    }

    const locationsWithimages = getlocation();
   
  
    useEffect(() => {
        dispatch(locationActions.findPlacesByState(stateName))  
        dispatch(imageActions.findImages()) 
        dispatch(sessionActions.restoreUser())   
    }, [dispatch])

    return (
        <div className='hair-spots-div'>
            <h1>Hair spots in {stateName}</h1>
           
            {locationsWithimages.map(location => (
                    <Link to={`/locations/${stateName}/${location.id}`} key={location?.id}>
                        <div className='hair-spot'>
                            <div className='hair-spot-img'>
                            <img src={location.image.url} alt={location.image.url} className='tile-image-pic'/>
                            </div>
                            <div>
                                {location.name}
                                {`$${location.price} `}
                                {location.userId === user?.id ? renderEditDelete() : null}
                            </div>                       
                       
                        </div>
                    
                    </Link>
                ))}
            
        </div>
    )
}

export default LocationsInState
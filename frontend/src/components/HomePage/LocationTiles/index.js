import React, {useEffect} from 'react';
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from 'react-router';
import * as locationActions from '../../../store/location';
import * as imageActions from '../../../store/image';

import './LocationTiles.css'

const LocationTiles = () => {
    // const history = useHistory()
    const dispatch = useDispatch();
    const locations = useSelector(state => state.location)
    const images = useSelector(state => state.image)     
    
    const locationsArray = Object.values(locations);
    const imagesArray = images.image;
    // console.log(imagesArray[0])
    // const locationswithImages = [];    
        
        useEffect(() => {           
            dispatch(locationActions.findPlaces())
            dispatch(imageActions.findImages())

            for (let i = 0; i < locationsArray.length; i++) {//pair a location with an image
                let location = locationsArray[i];
                for (let j = 0; j < imagesArray.length; j++) {
                    let image = imagesArray[j];

                    if (image.locationId === location.id) {
                        console.log(location.id, image.locationId, 'mathes?')
                        location.image = image
                        // locationswithImages.push({location, image})
                    }
                }
            }
        
        },[dispatch])
       

    return (
        <div className='tile-div'>
            <h1>Explore nearby</h1>
            <div className='tiles'>
                {locationsArray.map(location => (
                <li key={location?.id}>
                    <NavLink to={`/locations/${location.state}`}>
                        <div className='tile-image'>
                            <img src={console.log(location.image, 'images')}/>
                        </div>
                        {location?.state}
                    </NavLink>
                </li>
            ))}
            </div>
            
        </div>
    )
}

export default LocationTiles;
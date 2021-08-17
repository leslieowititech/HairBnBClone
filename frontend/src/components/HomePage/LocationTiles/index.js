import React, {useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";

// import { useHistory } from 'react-router';
import * as locationActions from '../../../store/location';
import * as imageActions from '../../../store/image';

import './LocationTiles.css'

const LocationTiles = () => {
    // const history = useHistory()
    const dispatch = useDispatch();
    const locations = useSelector(state => state.location)
    const images = useSelector(state => state.image);
    const {stateName} = useParams();//this is the State as in Nebraska etc
   
    
    const locationsArray = Object.values(locations);
    const imagesArray = images.image;

   
    // const redirectToSatePage = (location) => {
    //     return history.push(`/locations/${location.state}`)
    // }
   
    
    const getlocation = () => {
        let locations = []

        for (let i = 0; i < locationsArray.length; i++) {//pair a location with an image
            let location = locationsArray[i];

            
            for (let j = 0; j < imagesArray?.length; j++) {
                let image = imagesArray[j];

                if (image.locationId === location.id) {                 
                    
                    if(!locations.includes(location)){
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
            dispatch(locationActions.findPlaces())
            dispatch(imageActions.findImages())           
        
        },[dispatch])
       

    return (
        <div className='tile-div'>
            <h1>Explore nearby</h1>
            <div className='tiles'>                
                {locationsWithimages.map(location => (
                <li key={location?.id}>                 
                        <Link to={`/locations/${location.state}`}> 
                    {/* <Link to={(e) => setPath(e.target)}> */}

                        <div className='tile-image'>
                                <img src={location.image.url} alt='image' className='tile-image-pic'/>
                        </div>
                        {location?.state}
                    </Link>
                </li>
            ))}
            </div>
            
        </div>
    )
}

export default LocationTiles;
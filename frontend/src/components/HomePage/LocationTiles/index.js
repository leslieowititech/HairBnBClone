import React, {useEffect} from 'react';
import { Link } from 'react-router-dom'
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
   
    console.log(locations, 'testing______')
    console.log(images, 'images____')
    // const locationsArray = locations;
    // const imagesArray = images;

   
    // const redirectToSatePage = (location) => {
    //     return history.push(`/locations/${location.state}`)
    // }
   
    
    const getlocation = () => {
        let res = []


        for (let i = 0; i < locations?.length; i++) {//pair a location with an image
            let location = locations[i];
            for (let j = 0; j < images?.length; j++) {
                let image = images[j];

                if (image.locationId === location.id) {                 
                    
                    if(!res.includes(location)){
                        location.image = image
                        res.push(location)
                    }
                }
            }
        }

        return res;
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
                        <div className='tile-image'>
                                <img src={location.image.url} alt={location.image} className='tile-image-pic'/>
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
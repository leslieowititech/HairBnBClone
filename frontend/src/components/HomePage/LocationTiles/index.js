import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import * as locationActions from '../../../store/location';

const LocationTiles = () => {
    const dispatch = useDispatch();
    const locations = useSelector(state => state.location) 
    const locationsArray = Object.values(locations);
        
        useEffect(() => {           
            dispatch(locationActions.findPlaces())
        },[dispatch])

        console.log(locations, 'test')

    return (
        <div>
            <h1>hello from tiles</h1>
            {locationsArray.map(location => (
                <li key={location?.id}>{location?.state}</li>
            ))}
            
        </div>
    )
}

export default LocationTiles;
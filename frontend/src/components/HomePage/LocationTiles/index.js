import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import * as locationActions from '../../../store/location';

const LocationTiles = () => {
    const dispatch = useDispatch();
    const locations = useSelector(state => state.location)
    // const [errors, setErrors] = useState([]);
    
    // const locations = dispatch(locationActions.findPlaces())
    // const getLocations =  async () => {
        
        //     const locations =  await csrfFetch('/api/locations')
        //     const res = await locations.json();
        //     const data = await res
        //     console.log(data)
        //     return data;
        // }
        
        useEffect(() => {
            // getLocations()
            dispatch(locationActions.findPlaces())
        },[dispatch])    
        console.log(locations, 'test')

    return (
        <div>
            <h1>hello from tiles</h1>
            {/* {!!data && data.map(location => (
                <li key={location.id}>{location.state}</li>
            ))} */}
            
        </div>
    )
}

export default LocationTiles;
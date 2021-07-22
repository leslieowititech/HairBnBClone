import React, {useSate} from 'react';
// import { useDispatch } from "react-redux";

import { csrfFetch } from '../../../store/csrf';
// import * as locationActions from '../../../store/location';

const LocationTiles = () => {
    // const dispatch = useDispatch();
    // const [errors, setErrors] = useState([]);

    // const locations = dispatch(locationActions.findPlaces())
    // const locations = csrfFetch('/api/locations')
    //  console.log(locations)

    return (
        <div>
            <h1>hello from tiles</h1>
        </div>
    )
}

export default LocationTiles;
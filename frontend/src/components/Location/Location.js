import React, {useEffect} from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import * as locationActions from '../../../store/location';

const LocationsInState = () => {
    const dispatch = useDispatch();
    const locations = useSelector(state => state.location);
    const locationsArray = Object.values(locations);

    const state = useParams();
    
    console.log(state);
    useEffect(() => {
        dispatch(locationActions.findPlaces())
    },[dispatch])
    
    return (
        <div>

        </div>
    )
}

export default LocationsInState
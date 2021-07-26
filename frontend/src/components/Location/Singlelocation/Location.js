import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import * as locationActions from '../../../store/location'

const SingleLocation = () => {
    const dispatch = useDispatch();
    const location = useSelector(state => state.location);

    console.log(location, 'testtest123')
    useEffect(() => {
        dispatch(locationActions.findOnePlace())
    },[dispatch])
    return (
        <div>
            <h1>Hello from single state</h1>
        </div>
    )
}

export default SingleLocation;
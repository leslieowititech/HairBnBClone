import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import * as locationActions from '../../../store/location'

const SingleLocation = () => {
    const dispatch = useDispatch();
    const location = useSelector(state => console.log(state))

    // useEffect(() => {
    //     dispatch(location.findOnePlace())
    // },[dispatch])
    return (
        <div>
            <h1>Hello from single state</h1>
        </div>
    )
}

export default SingleLocation;
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import * as locationActions from '../../../store/location'

import './SingleLocation.css';

const SingleLocation = () => {
    const dispatch = useDispatch();
    const location = useSelector(state => state.location);
    const data = Object.values(location)

    // console.log(location, 'testtest123')
    useEffect(() => {
        dispatch(locationActions.findOnePlace())
    },[dispatch])
    let l = data[0];
    return (
        <div className='single-location-div'>
            <h1>{l.address}</h1>
            <div className='single-location-image-gallery'></div>
            {data.map(l => (
                <div key={l.id} className='single-location-details'>
                    {l.name}
                    {l.price}
                </div>
            ))}
            <div className='booking-form-div'>
                <form className='booking-form'>
                    <h2 className='booking-form-price'> Price ${l.price}</h2>
                    <input 
                      type='date' 
                      placeholder='Booking date'
                      className='booking-form-input'
                     ></input>
                    <input 
                        type='text' 
                        placeholder='Number of clients'
                        className='booking-form-input'
                        ></input>
                    <button type='submit' className='booking-form-button'>Check Availability</button>
                </form>
            </div>
        </div>
    )
}

export default SingleLocation;
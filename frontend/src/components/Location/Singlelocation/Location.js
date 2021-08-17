import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import * as locationActions from '../../../store/location';
import * as imageActions from '../../../store/image';

import './SingleLocation.css';

const SingleLocation = () => {
    const {stateName, id} = useParams()
    console.log(id, 'id')
    const dispatch = useDispatch();
    const location = useSelector(state => state.location);
    const images = useSelector(state => state.image);
    const locationArray = Object.values(location).filter(location => {
        return +location.id === +id
    })     

    const imagesArray= images.image

    const getlocation = () => {
        let locations = []

        for (let i = 0; i < locationArray.length; i++) {//pair a location with an image
            let location = locationArray[i];
            for (let j = 0; j < imagesArray?.length; j++) {
                let image = imagesArray[j];

                if (image.locationId === location.id) {

                    if (!locations.includes(location)) {
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
        dispatch(locationActions.findOnePlace(stateName , id))
        dispatch(imageActions.findImages())
    },[dispatch])

    
    return (
        <div className='single-location-div'>
            <h1>{locationsWithimages.map(location => location?.address)}</h1>
            {locationsWithimages.map(location => (
                <div key={location.id} className='single-location-details'>
                    {location.name}
                    {location.price}
                </div>

            ))}
            <div className='single-location-image-gallery'>
                {locationsWithimages.map(location => (
                    <img src={location.image.url} alt={location.image.url} className='tile-image-pic'/>

                ))}
            </div>
            <div className='booking-form-div'>
                <form className='booking-form'>
                    <h2 className='booking-form-price'> Price ${locationsWithimages.map(location => location.price)}</h2>
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
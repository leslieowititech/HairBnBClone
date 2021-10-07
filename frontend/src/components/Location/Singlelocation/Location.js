import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';


import * as locationActions from '../../../store/location';
import * as imageActions from '../../../store/image';
import './SingleLocation.css';
import { findBookings } from '../../../store/booking';

const SingleLocation = () => {
    const {stateName, id} = useParams();
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user)
    const locations = useSelector(state => state.location);
    const bookings = useSelector(state => state.booking);
    const images = useSelector(state => state.image);
    const locationArray = Object.values(locations).filter(location => {
        return +location.id === +id
    });
    // console.log(locationArray, 'testArr')
    
    const bookingsArray = Object.values(bookings).filter(booking => booking.locationId === +id).map(booking => booking.bookingDate);
    // console.log(bookingsArray, 'array')
    

    const addImages = () => {
        let res = []
        for (let i = 0; i < locations.length; i++) {//pair a location with an image
            let location = locations[i];
            for (let j = 0; j < images?.length; j++) {
                let image = images[j];

                if (image.locationId === location.id) {

                    if (!res.includes(location)) {
                        location.image = image
                        res.push(location)
                    }
                }
            }
        }
        // console.log(res, 'here')
        return res;
    }
    
    const handleBooking = (e) => {
        e.preventDefault()
        console.log(user, 'user')
        if(!user){
            alert('Please log in to be able to book')
        }else{
            if(locationArray.length){
                console.log(locationArray[0], 'location')
            }
        }
    }

    const locationsWithimages = addImages();
    let date = new Date()
    const [year,month,day] = [date.getFullYear(), date.getMonth(), date.getDay()]

    useEffect(() => {
        dispatch(locationActions.findOnePlace(stateName , id))
        dispatch(imageActions.findImages())
        dispatch(findBookings())
    },[dispatch, id, stateName])

    
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
                {locationsWithimages.map((location, index) => (
                    <img key={index} src={location.image.url} alt={location.image.url} className='single-image-pic'/>

                ))}
            </div>
            <div className='booking-form-div'>
                <form className='booking-form'>
                    <h2 className='booking-form-price'> Price ${locationsWithimages.map(location => location.price)}</h2>
                    <input
                        type='date'
                        min= {`${year}-${month}-${day}`}
                        placeholder='Booking date'
                        className='booking-form-input'
                        
                    ></input>
                    <input
                        type='text'
                        placeholder='Number of clients'
                        className='booking-form-input'
                        //test
                    ></input>
                    <button type='submit' className='booking-form-button' onClick={handleBooking}>Check Availability</button>
                </form>
            </div>
        </div>
        
    )
}



export default SingleLocation;
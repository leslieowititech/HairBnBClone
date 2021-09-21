import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import * as locationActions from '../../../store/location';
import * as imageActions from '../../../store/image';
import './AllLocations.css';

const AllLocations = () => {
    const dispatch = useDispatch();
    const locations = useSelector(state => state.location);
    const images = useSelector(state => state.image)
    const locationsArray = Object.values(locations);
    const imagesArray = images.image;
    const user = useSelector(state => state.session.user);
    console.log(images, 'images')

    const renderEditDelete = () => {
        return (
            <div className='edit-and-delete-buttons-div'>
                <button className='button'>Edit</button>
                <button className='button'>Delete</button>
            </div>
        )
    }

    const getlocation = () => {
        let locations = []

        for (let i = 0; i < locationsArray.length; i++) {//pair a location with an image
            let location = locationsArray[i];
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
        dispatch(locationActions.findPlaces())
        dispatch(imageActions.findImages())
    },[dispatch])

    return (
        <div className='hair-spots-div'>
            {locationsWithimages.map(location => (
                
                    <div className='hair-spot' key={location.id}>
                    <Link to={`/locations/${location.state}/${location.id}`} >
                        <div className='hair-spot-img all-locations-img'>
                            <img src={location.image.url} alt={location.image.url} className='tile-image-pic' />
                        </div>
                    </Link>
                        <div>
                            {location.name}
                            {`$${location.price} `}
                            {location.userId === user?.id ? renderEditDelete() : null}
                        </div>
                    </div>
                
            ))}
          
        </div>
    )
}

export default AllLocations
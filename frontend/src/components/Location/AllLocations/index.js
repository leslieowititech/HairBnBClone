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
    // const locationsArray = Object.values(locations);
    // const imagesArray = images;
    const user = useSelector(state => state.session.user);

    const renderEditDelete = (state, id, index) => {
        const handleDelete = async () => {
            await dispatch(locationActions.deleteAPlace(state, id, index))
            
        }
        return (
            <div className='edit-and-delete-buttons-div'>
                <button className='button'>Edit</button>
                <button className='button' onClick={handleDelete}>Delete</button>
            </div>
        )
    }

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

    const locationsWithimages = addImages();

    useEffect(() => {
            dispatch(locationActions.findPlaces())
    },[dispatch])
    useEffect(() => {
        dispatch(imageActions.findImages())
    },[dispatch])

    return (
        <div className='hair-spots-div'>
            {locationsWithimages.map((location, indx) => (
                
                    <div className='hair-spot' key={indx}>
                    <Link to={`/locations/${location.state}/${location.id}`} >
                        <div className='hair-spot-img all-locations-img'>
                            {location.image && 
                            
                            <img src={location.image?.url} alt={location.image.url} className='tile-image-pic' />
                            }
                        </div>
                    </Link>
                        <div>
                            {location.name}
                            {`$${location.price} `}
                        {location.userId === user?.id ? renderEditDelete(location.state, location.id, indx) : null}
                        </div>
                    </div>
                
            ))}
          
        </div>
    )
}

export default AllLocations
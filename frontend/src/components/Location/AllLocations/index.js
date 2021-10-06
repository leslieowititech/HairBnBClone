import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import * as locationActions from '../../../store/location';
import './AllLocations.css';

const AllLocations = () => {
    const dispatch = useDispatch();
    const locations = useSelector(state => state.location);
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

   const getImageUrl = (imageArray, locationId) => {
        let url = '';
       for (let i = 0; i < imageArray.length ;i++){
           let image = imageArray[i]
           if(image.locationId === locationId){
               url = image.url
               break;
           }
        }
        return url;
   }
   

    useEffect(() => {
            dispatch(locationActions.findPlaces())
    },[dispatch])
   

    return (
        <div className='hair-spots-div'>
            {locations.map((location, indx) => (
                
                    <div className='hair-spot' key={indx}>
                    <Link to={`/locations/${location.state}/${location.id}`} >
                        <div className='hair-spot-img all-locations-img'>
                            {location.Images?.length && 
                                
                                <img src={getImageUrl(location.Images, location.id)} alt={getImageUrl(location.Images, location.id)} className='tile-image-pic' />
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
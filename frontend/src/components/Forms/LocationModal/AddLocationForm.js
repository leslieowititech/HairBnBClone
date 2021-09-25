import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { createAPlace } from '../../../store/location';
import './AddLocation.css';


const AddLocationForm = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user)
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [price, setPrice] = useState(0);
    const [errors, setErrors] = useState([]);
    const [imageUrl, setImageUrl] = useState('');
    const [capacity, setCapacity] = useState();

    // const imgRegex = /(https:\/\/)([^\s(["<,>/]*)(\/)[^\s[",><]*(.png|.jpg)(\?[^\s[",><]*)?/g

    const payload = {
        name,
        address,
        city,
        country,
        state,
        price,
        userId: user?.id,
        url: imageUrl,
        capacity: capacity,
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()
         if(!user){
            alert('Please login or signup')
        }else{

            const data = await dispatch(createAPlace(payload))
            console.log(data, 'Data')
            if(data.errors){
                console.log(data.errors, 'Errors')
                setErrors(data.errors)
            }
        }
        
        
    }

    return (
        <>
        <ul>
            {errors?.map((err, index)=> (
                <li key={index}>{err.msg}</li>
            ))}
        </ul>
        <h3 className='add-a-spot-form-header'>Lets add your Spot!</h3>
        <form className='log-in-form' onSubmit={handleSubmit}>
            <input 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='log-in-form-input'
                placeholder='Enter spot name'/>
            <input 
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className='log-in-form-input'
                placeholder='Enter address' />
            <input 
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className='log-in-form-input'
                placeholder='Enter city' />
            <input
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className='log-in-form-input'
                placeholder='Enter country name'/>
            <select name="state" onChange={(e) => setState(e.target.value)} className='log-in-form-input'>
                    <option value="Alabama">Alabama</option>
                    <option value="Alaska">Alaska</option>
                    <option value="Arizona">Arizona</option>
                    <option value="Arkansas">Arkansas</option>
                    <option value="California">California</option>
                    <option value="Colorado">Colorado</option>
                    <option value="Connecticut">Connecticut</option>
                    <option value="Delaware">Delaware</option>
                    <option value="District of Columbia">District of Columbia</option>
                    <option value="Florida">Florida</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Hawaii">Hawaii</option>
                    <option value="Idaho">Idaho</option>
                    <option value="Illinois">Illinois</option>
                    <option value="Indiana">Indiana</option>
                    <option value="Iowa">Iowa</option>
                    <option value="Kansas">Kansas</option>
                    <option value="Kentucky">Kentucky</option>
                    <option value="Louisiana">Louisiana</option>
                    <option value="Maine">Maine</option>
                    <option value="Maryland">Maryland</option>
                    <option value="Massachusetts">Massachusetts</option>
                    <option value="Michigan">Michigan</option>
                    <option value="Minnesota">Minnesota</option>
                    <option value="Mississippi">Mississippi</option>
                    <option value="Missouri">Missouri</option>
                    <option value="Montana">Montana</option>
                    <option value="Nebraska">Nebraska</option>
                    <option value="Nevada">Nevada</option>
                    <option value="New Hampshire">New Hampshire</option>
                    <option value="New Jersey">New Jersey</option>
                    <option value="New Mexico">New Mexico</option>
                    <option value="New York">New York</option>
                    <option value="North Carolina">North Carolina</option>
                    <option value="North Dakota">North Dakota</option>
                    <option value="Ohio">Ohio</option>
                    <option value="Oklahoma">Oklahoma</option>
                    <option value="Oregon">Oregon</option>
                    <option value="Pennsylvania">Pennsylvania</option>
                    <option value="Rhode Island">Rhode Island</option>
                    <option value="South Carolina">South Carolina</option>
                    <option value="South Dakota">South Dakota</option>
                    <option value="Tennessee">Tennessee</option>
                    <option value="Texas">Texas</option>
                    <option value="Utah">Utah</option>
                    <option value="Vermont">Vermont</option>
                    <option value="Virginia">Virginia</option>
                    <option value="Washington">Washington</option>
                    <option value="West Virginia">West Virginia</option>
                    <option value="Wisconsin">Wisconsin</option>
                    <option value="Wyoming">Wyoming</option>
            </select>
            <input
                placeholder='Enter your price'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className='log-in-form-input'
                type='number'
            />
            <input
                placeholder='Enter image url'
                className='log-in-form-input'
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
            />
            <input 
                    placeholder='Enter spot capacity' 
                    name='capacity'
                    value={capacity}
                    onChange={(e) => setCapacity(e.target.value)}
                    type='number' 
                    className='log-in-form-input'
            />

            <button className='log-in-form-button'>Save</button>
        </form>
        </>
    )
}

export default AddLocationForm;
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { createAPlace } from '../../store/location';
import { createAnImage } from '../../store/image';
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
    const [imageUrl, setImageUrl] = useState('')

    const payload = {
        name,
        address,
        city,
        country,
        state,
        price,
        userId: user?.id
    }
    const imagePayload = {
        url: imageUrl,
        locationId: payload.id
     }
     console.log(payload.id, 'Finding id')
    const handleSubmit = async (e) => {
        e.preventDefault()
        if(!user){
            alert('Please login or signup')
        }else{

            const data = await dispatch(createAPlace(payload))
            const imgData = await dispatch(createAnImage(imagePayload))
            setErrors(data)
        }
        
        
    }

    return (
        <>
        <ul>
            {errors.map((err, index)=> (
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
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
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
            <button className='log-in-form-button'>Save</button>
        </form>
        </>
    )
}

export default AddLocationForm;
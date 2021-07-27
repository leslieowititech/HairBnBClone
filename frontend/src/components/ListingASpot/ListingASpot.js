import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as locationActions from '../../store/location';

const ListingASpot = () => {
    const dispatch = useDispatch();
    const locations = useSelector(state => state.location)
    const user = useSelector(state => state.session.user);

    const [userId, setUserId] = useState(user.id);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('')


    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            userId
        }
    }
    return (
        <div className='listing-a-spot-div'>
            <div className='left'>
                <h1>What kind of spot are you listing?</h1>
            </div>
            <div className='right'>
                <form>
                    <input placeholder='name'></input>
                    <input placeholder='address'></input>
                    <input placeholder='price'></input>
                    <input placeholder='state'></input>                    
                    <input placeholder='city'></input>
                    <input placeholder='latitude'></input>
                    <input placeholder='longitude'></input>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}
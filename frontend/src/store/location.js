import { csrfFetch } from './csrf';
import { createAnImage } from './image';


const GET_LOCATION = 'location/GET_LOCATION';
const DELETE_LOCATION = 'location/DELETE_LOCATION';
const UPDATE_LOCATION = 'location/UPDATE_LOCATION';
const CREATE_LOCATION = 'location/CREATE_LOCATION';

const createLocation = (location) => {
    return {
        type: CREATE_LOCATION,
        payload: location
    }
}

const getLocation = (location) => {
    return {
        type: GET_LOCATION,
        payload: location
    };
};

const deleteLocation = (location) => {
    return {
        type: DELETE_LOCATION,
        payload: location
    }
}

const updateLoaction = (location) => {
    return {
        type: UPDATE_LOCATION,
        location
    }
}

const initialState = [] //initial state

const locationReducer = (state = initialState, action) => {
    let newState;
    switch(action.type) {
        case GET_LOCATION:
                newState = [ ...action.payload]
            return newState
       
        case DELETE_LOCATION: 
                console.log('deletehitinghere______________0000') 
                newState = [...state]
                newState = newState.filter(location => location.id !== action.payload.id)
                return newState;
            
        case CREATE_LOCATION:
                newState = {...state}
                newState[action.payload?.id] = action.payload
                newState = Object.values(newState)
                return newState;
        case UPDATE_LOCATION:
            return {
                ...state,
                [action.location.id]: action.location
            }
            
        default:
            return state;
    }
}

export const createAPlace = (payload) => async dispatch => {
    const response = await csrfFetch('/api/locations/new', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: payload.name,
            address: payload.address,
            price: payload.price,
            state: payload.state,
            country: payload.country,
            city: payload.city,
            userId: payload.userId,
            capacity: payload.capacity,
            url: payload.url
        })
    })
    

    if (response.ok) {
        const data = await response.json()
        await dispatch(createLocation(data))
        
        return response;
    }
}

export const deleteAPlace = (state, id, location) =>  async dispatch => {
    console.log(location, '_______________maybehithere')
    const response = await csrfFetch(`/api/locations/${state}/${id}`, {
        method: 'DELETE'
    })
    console.log(location, '__________herebeore_________0000')
    if(response.ok){
        console.log(location, '__________hereAFTER_________0000')
        await dispatch(deleteLocation(location))
        return response
    }
}

export const findPlaces = () => async dispatch => {
    const response = await csrfFetch('/api/locations')
    const data = await response.json();  
    
    if(response.ok){
        await dispatch(getLocation(data))
        return response;
    }
}

export const findPlacesByState = (state) => async dispatch => {
    
    const response = await csrfFetch(`/api/locations/${state}`);
    const data = await response.json();
    
    if(response.ok){
        await dispatch(getLocation(data))
        return response;
    }

}

export const findOnePlace = (state,id) => async dispatch => {
    const response = await csrfFetch(`/api/locations/${state}/${id}`);
    const data = await response.json();
    console.log(data,state,id, 'data')
    if(response.ok){
        await dispatch(getLocation(data))
        return response;
    }
}


export const updtaetOneLocation = () => async dispatch => {
    const response = await csrfFetch('/api/locations/:state/:id')
    const data = await response.json()


    if (response.ok) {
        await dispatch(updateLoaction(data))
        return response;
    }
}

export default locationReducer;
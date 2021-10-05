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

const deleteLocation = (index) => {
    return {
        type: DELETE_LOCATION,
        payload: index
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
                newState = {...state}   
                newState.splice(action.payload,1)
                return newState;
            
        case CREATE_LOCATION:
            console.log(state, 'statehere__________-0000')
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
            capacity: payload.capacity
        })
    })
    

    if (response.ok) {
        const data = await response.json()
        let imagePayload = {}
        imagePayload.url = payload.url
        imagePayload.locationId = data.id
        await Promise.all([dispatch(createAnImage(imagePayload)), dispatch(createLocation(data))])
        
        return response;
    }
}

export const deleteAPlace = (state, id, index) =>  async dispatch => {
    const response = await csrfFetch(`/api/locations/${state}/${id}`, {
        method: 'DELETE'
    })

    if(response.ok){
        await dispatch(deleteLocation(index))
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
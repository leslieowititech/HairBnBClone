import { csrfFetch } from './csrf';

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

const deleteLocation = (id) => {
    return {
        type: DELETE_LOCATION,
        locationId: id
    }
}

const updateLoaction = (location) => {
    return {
        type: UPDATE_LOCATION,
        location
    }
}

const initialState = { } //initial state

const locationReducer = (state = initialState, action) => {
    let newState;
    switch(action.type) {
        case GET_LOCATION:
            // console.log(action.payload, 'payloadGet')
            
                newState = {}
                action.payload.forEach(location => {
                newState[location.id] = location
            })
            return {
                ...state, ...newState
            }
       
        case DELETE_LOCATION:            
                delete newState[action.locationId]
                return newState;
            
        case CREATE_LOCATION:
                newState[action.payload?.id] = action.payload
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
    console.log(payload, '____________payloadhere')
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
            userId: +payload.userId
        })
    })
    

    if (response.ok) {
        const data = await response.json()
        await dispatch(createLocation(data))
        return response;
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

export const deleteOneLocation = () => async dispatch => {
    const response = await csrfFetch('/api/locations/:state/:id')
    const data = await response.json()

    if (response.ok) {
        await dispatch(deleteLocation(data))
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
import { csrfFetch } from './csrf';

const GET_LOCATION = 'location/getLocation';
const DELETE_LOCATION = 'location/deleteLocation';
const UPDATE_LOCATION = 'location/updateLoaction';
const CREATE_LOCATION = 'location/cretaeLocation';

const cretaeLocation = (location) => {
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

const deleteLocation = () => {
    return {
        type: DELETE_LOCATION,
    }
}

const updateLoaction = (location) => {
    return {
        type: UPDATE_LOCATION,
        payload: location
    }
}

const initialState = { } //initial state

const locationReducer = (state = initialState, action) => {
    let newState;
    switch(action.type) {
        case GET_LOCATION:
            {
                newState = {}
                action.payload.forEach(location => {
                newState[location.id] = location
            })
            return {
                ...state, ...newState
            }
        }
        case DELETE_LOCATION:
            {
                newState = Object.assign({}, state);
                newState.location = null;
                return newState;
            }
        case CREATE_LOCATION:
            {
                newState = Object.assign({}, state);
                newState.location = action.payload;
                return newState;
            }
        default:
            return state;
    }
}

export const createAPlace = () => async dispatch => {
    const response = await csrfFetch('/api/locations/new')
    const data = await response.json();

    if (response.ok) {
        await dispatch(getLocation(data))
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

export const findPlacesByState = () => async dispatch => {
    const response = await csrfFetch('/api/locations/:state');
    const data = await response.json();

    if(response.ok){
        await dispatch(getLocation(data))
        return response;
    }

}

export const findOnePlace = () => async dispatch => {
    const response = await csrfFetch('/api/locations/:state/:id');
    const data = await response.json();

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
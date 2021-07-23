import { csrfFetch } from './csrf';

const GET_LOCATION = 'location/getLocation';
const DELETE_LOCATION = 'location/deleteLocation';
const UPDATE_LOCATION = 'location/updateLoaction';

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

const initialState = { location: null} //initial state

const locationReducer = (state = initialState, action) => {
    let newSate;
    switch(action.type) {
        case GET_LOCATION:
        newSate = Object.assign({}, state);
        newSate.location = action.payload;
        return newSate;
        case DELETE_LOCATION:
            newSate = Object.assign({}, state);
            newSate.location = null;
            return newSate;
        default:
            return state;
    }
}

export const findPlaces = () => async dispatch => {
    const response = await csrfFetch('/api/location')
    const data = await response.json();


    if(response.ok){
        await dispatch(getLocation(data.location))
        return response;
    }
}

export default locationReducer;
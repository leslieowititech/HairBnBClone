import { csrfFetch } from "./csrf";

const GET_IMAGE = 'image/GET_IMAGE';
const DELETE_IMAGE = 'image/DELETE_IMAGE';
const UPDATE_IMAGE = '  image/UPDATE_IMAGE';
const CREATE_IMAGE = 'image/CREATE_IMAGE'

const getImage = (image) => {
    return {
        type: GET_IMAGE,
        payload: image
    }
}

const deleteImage = () => {
    return{
        type: DELETE_IMAGE
    }
}

const createImage = (payload) => {
    return{
        type: CREATE_IMAGE,
        payload: payload
    }
}

const updateImage = (image) => {
    return{
        type: UPDATE_IMAGE,
        payload: image
    }
}

const initialState = {image: null}//initialstate

const imageReducer = (state = initialState, action) => {
    let newState;
    switch(action.type) {
        case GET_IMAGE:{
            newState = Object.assign({}, state);
            newState.image = action.payload
            return newState
        }
        case CREATE_IMAGE:
            console.log(action.payload, '_________createthiunkHEREIMG')
            newState[action.payload.id] = action.payload
            return newState
        default:
            return state
    }
}

export const findImages = () => async dispatch => {
    const response = await csrfFetch('/api/images');
    const data = await response.json();
    // console.log(data, 'tested')
    
    if (response.ok){
        await dispatch(getImage(data))
        return response
    }
}

export const createAnImage = (payload) => async dispatch => {
    const response = await csrfFetch('/api/images/new', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            url: payload.url,
            locationId: payload.locationId
        })
    })

}

export default imageReducer;
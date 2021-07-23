import { csrfFetch } from "./csrf";

const GET_IMAGE = 'image/getImage';
const DELETE_IMAGE = 'image/deleteImage';
const UPDATE_IMAGE = '  image/updateImage';

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
        default:
            return state
    }
}

export const findImages = () => async dispatch => {
    const response = await csrfFetch('/api/images');
    const data = await response.json();
    console.log(data, 'testing')
    
    if (response.ok){
        await dispatch(getImage(data))
        return response
    }
}

export default imageReducer;
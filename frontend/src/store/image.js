import { csrfFetch } from "./csrf";

const GET_IMAGE = 'image/GET_IMAGE';


const getImage = (image) => {
    return {
        type: GET_IMAGE,
        payload: image
    }
}






const initialState = {}//initialstate

const imageReducer = (state = initialState, action) => {
    let newState;
    switch(action.type) {
        case GET_IMAGE:{
            newState = {...state};
            newState = action.payload
            return newState
        }
       
        default:
            return state
    }
}

export const findImages = () => async dispatch => {
    const response = await csrfFetch('/api/images');
    const data = await response.json();
   
    
    if (response.ok){
        await dispatch(getImage(data))
        return response
    }
}



export default imageReducer;
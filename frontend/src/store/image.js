import { csrfFetch } from "./csrf";

const GET_IMAGE = 'image/GET_IMAGE';
const UPDATE_IMAGE = '  image/UPDATE_IMAGE';
const CREATE_IMAGE = 'image/CREATE_IMAGE'

const getImage = (image) => {
    return {
        type: GET_IMAGE,
        payload: image
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

const initialState = {}//initialstate

const imageReducer = (state = initialState, action) => {
    let newState;
    switch(action.type) {
        case GET_IMAGE:{
            newState = {...state};
            newState.image = action.payload
            return newState
        }
        case CREATE_IMAGE:
            newState = {...state}
            newState[action.payload?.id] = action.payload
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
    console.log(payload, 'imagePayload')
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

    if(response.ok){
       const data = await response.json()
       dispatch(createImage(data));
       return response

    }

}

export default imageReducer;
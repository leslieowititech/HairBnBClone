import { csrfFetch } from "./csrf";

const GET_BOOKING = 'bookings/GET_BOOKING';
const EDIT_BOOKING = 'bookings/EDIT_BOOKING';
const DELETE_BOOKING = 'bookings/DELETE_BOOKING';
const CREATE_BOOKING = 'bookings/CREATE_BOOKING';


const getBooking = (booking) => {
    return {
        type: GET_BOOKING,
        payload: booking
    }
}

const createBooking = (booking) => {

    return {
        type: CREATE_BOOKING,
        payload: booking
    }
}


const initialState = {};

const bookingsReducer = (state = initialState, action) => {
    let newState = {...state};
    switch(action.type){
        case GET_BOOKING:
            // console.log(action.payload, 'bookings')
            action.payload.forEach(booking => {
                newState[booking.id] = booking
            })
            return newState;
        case CREATE_BOOKING:
            newState[action.payload?.id] = action.payload
            return newState
        default:
            return newState;
    }
}

export const findBookings = () => async dispatch => {
    const response = await csrfFetch('/api/bookings');
    const data = await response.json();

    if(response.ok){
        await dispatch(getBooking(data));
        return response;
    }
}

export const createABooking = (payload) => async dispatch => {
    const response = await csrfFetch('api/bookings/new', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            locationId: payload.locationId,
            userId: payload.userId,
            bookingDate: payload.bookingDate
        })
    })

    if(response.ok){
        const data = response.json()
        dispatch(createBooking(data))
        return response
    }
}

export default bookingsReducer;
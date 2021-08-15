// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import * as locationActions from '../../../store/location';
// import * as imageActions from '../../../store/image';

// import './SingleLocation.css';

// const SingleLocation = () => {
//     const dispatch = useDispatch();
//     const location = useSelector(state => state.location);
//     const images = useSelector(state => state.image);
//     const locationArray = Object.values(location)
//     // console.log(locationArray)

//     const imagesArray= images.image

//     // const getlocation = () => {
//     //     let locations = []

//     //     for (let i = 0; i < data.length; i++) {//pair a location with an image
//     //         let location = data[i];
//     //         for (let j = 0; j < imagesArray?.length; j++) {
//     //             let image = imagesArray[j];

//     //             if (image.locationId === location.id) {

//     //                 if (!locations.includes(location)) {
//     //                     location.image = image
//     //                     locations.push(location)
//     //                 }
//     //             }
//     //         }
//     //     }
//     //     return locations;
//     // }

    

//     // const locationsWithimages = getlocation();

    
//     useEffect(() => {
//         dispatch(locationActions.findOnePlace())
//         dispatch(imageActions.findImages())
//     },[dispatch])

//     return (
//         <h1>'hello'</h1>
//     )
//     // console.log(data)
//     // let l = data[0];
//     // return (
//     //     <div className='single-location-div'>
//     //         <h1>{locationsWithimages.filter(location => location.address)}</h1>
//     //         <div className='single-location-image-gallery'></div>
//     //         {locationsWithimages.map(l => (
//     //             <div key={l.id} className='single-location-details'>
//     //                 {l.name}
//     //                 {l.price}
//     //             </div>
//     //         ))}
//     //         <div className='booking-form-div'>
//     //             <form className='booking-form'>
//     //                 <h2 className='booking-form-price'> Price ${locationsWithimages.filter(location => location.price)}</h2>
//     //                 <input 
//     //                   type='date' 
//     //                   placeholder='Booking date'
//     //                   className='booking-form-input'
//     //                  ></input>
//     //                 <input 
//     //                     type='text' 
//     //                     placeholder='Number of clients'
//     //                     className='booking-form-input'
//     //                     ></input>
//     //                 <button type='submit' className='booking-form-button'>Check Availability</button>
//     //             </form>
//     //         </div>
//     //     </div>
//     // )
// }

// export default SingleLocation;
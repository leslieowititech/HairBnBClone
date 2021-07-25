import React from 'react';
import './BigImage.css'

const BigImage = () => {
    const bigPicurl = '/images/bigPic.jpg';
    return (
        <div className="big-image-div">
            <div className='big-image-h1-div'>
                <h1 className='big-image-h1'>All hair, for women and men alike should get the best care.</h1>
            </div>
            <img src={bigPicurl} alt="bigPic" className="big-image"/>
        </div>
    )
}

export default BigImage;
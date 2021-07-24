import React from 'react';
import './BigImage.css'

const BigImage = () => {
    const bigPicurl = '/images/bigPic.jpg';
    return (
        <div className="big-image-div">
            <img src={bigPicurl} alt="bigPic" className="big-image"/>
        </div>
    )
}

export default BigImage;
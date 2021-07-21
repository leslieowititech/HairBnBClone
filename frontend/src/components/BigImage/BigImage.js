import React from 'react';
import './BigImage.css'

const BigImage = () => {
    const bigPicurl = 'https://images.unsplash.com/photo-1484291150605-0860ed671f04?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTl8fGhhaXIlMjBjdXR8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    return (
        <div className="big-image-div">
            <img src={bigPicurl} alt="bigPic" className="big-image"/>
        </div>
    )
}

export default BigImage;
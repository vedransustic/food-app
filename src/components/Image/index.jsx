import React from 'react';
import './index.css'

const Image = ({linkToImage, name, className}) => {
    return (
        <img src={linkToImage} alt={name} className={className}/>
    );
};

export default Image;

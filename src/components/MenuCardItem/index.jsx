import React from 'react';
import './index.css'
import Image from "../Image";
import Button from "../Button";
import AddRemoveButton from "../AddRemoveItem";

const MenuCardItem = ({name, info, price, img}) => {
    return (
        <div className='card'>
            <Image name='food' linkToImage={img} className='card-img'/>
            <div className="card-content">
                <div className="card-head_desc">
                    <p className='head_desc-name'>{name}</p>
                    <p className='head_desc-info'>
                        <small> {info} </small>
                    </p>
                </div>
                <span className='foot_desc-price'>{parseFloat(price).toFixed(2)} kn</span>
                <AddRemoveButton quantity={1}/>
            </div>

        </div>
    );
};

export default MenuCardItem;
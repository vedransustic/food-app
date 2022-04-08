import React from 'react';
import Image from "../Image";
import LogoImg from '../../img/logo.png'
import './index.css'

const Logo = () => {
    return (
        <div className='logo-content'>
            <Image linkToImage={LogoImg} name={'logo'} className={'logo'}/>
            <p className='logo-text'>Restaurant & BBQ</p>
        </div>
    );
};

export default Logo;
import React from 'react';
import Image from "../Image";
import LogoImg from '../../img/logo.png'
import './index.css'
import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <Link to='/' style={{textDecoration: 'none', color: 'inherit'}}>
            <div className='logo-content'>
                <Image linkToImage={LogoImg} name={'logo'} className={'logo'}/>
                <p className='logo-text'>Restaurant & BBQ</p>
            </div>
        </Link>
    );
};

export default Logo;
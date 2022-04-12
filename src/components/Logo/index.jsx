import { memo } from "react";
import { Link } from "react-router-dom";
import { Image } from "../";
import './index.css'
import LogoImg from '../../img/logo.png'

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

export default memo(Logo);
import React from 'react';
import Logo from "../Logo";
import './index.css'
import CartButton from "../../container/CartButton";

const Navigation = () => {
    return (
        <div className='navigation'>
            <Logo/>
            <CartButton />
        </div>
    );
};

export default Navigation;
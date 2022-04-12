import { memo } from "react";
import { Logo } from "../";
import { CartButton } from "../../container";
import './index.css'

const Navigation = () => {
    return (
        <div className='navigation'>
            <Logo/>
            <CartButton />
        </div>
    );
};

export default memo(Navigation);
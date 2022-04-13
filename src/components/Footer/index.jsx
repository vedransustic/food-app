import { memo } from 'react';
import { Logo } from "../";
import './index.css'

const Footer = () => {
    return (
        <footer>
            <p>We have a great selection of Burgers and BBQ made with organic ingredients, by the best cooks in the land.</p>
            <Logo/>
        </footer>
    );
};

export default memo(Footer);
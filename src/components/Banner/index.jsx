import { memo } from 'react';
import { Link } from "react-router-dom";
import { Image, Button } from "../";
import './index.css'
import BurgerFriesBanner from '../../img/BurgerFries.png'

const Banner = () => {
    return (
        <header className="header">
            <div className='header-content'>
                <div className="content-main">
                    <h1>Delicius food for your cravings</h1>
                    <p>We made the best and freshest burgers with top rated recipes from around the world.</p>
                    <Link to='/menu' style={{textDecoration: 'inherit', color: "inherit"}}>
                        <Button className='to-menu-button' displayFas={true} text='View Menu' faClassName='fas fa-long-arrow-alt-right'/>
                    </Link>
                    </div>
            </div>
            <Image linkToImage={BurgerFriesBanner} name={'foodie-img'} className={'banner-image'}/>
        </header>
    );
};

export default memo(Banner);

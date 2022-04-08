import './index.css'
import BurgerFriesBanner from '../../img/BurgerFries.png'
import Image from "../../components/Image";
import Button from "../../components/Button";


const Banner = () => {
    return (
        <header className="header">
            <div className='header-content'>
                <div className="content-main">
                    <h1>Delicius food for your cravings</h1>
                    <p>We made the best and freshest burgers with top rated recipes from around the world.</p>
                    <Button displayFas={true} text='View Menu' faClassName='fas fa-long-arrow-alt-right'/>
                </div>
            </div>
            <Image linkToImage={BurgerFriesBanner} name={'foodie-img'} className={'banner-image'}/>
        </header>
    );
};

export default Banner;

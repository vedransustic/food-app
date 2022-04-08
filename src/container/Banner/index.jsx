import './index.css'
import BurgerFriesBanner from '../../img/burger-fries.png'
import Image from "../../components/Image";


const Banner = () => {
    return (
        <header className="header">
            <div className='header-content'>
                <div className="content-main">
                    <h1>Delicius food for your cravings</h1>
                    <p>We made the best and freshest burgers with top rated recipes from around the world.</p>
                    <button> View Menu <i className="fas fa-long-arrow-alt-right"/></button>
                </div>
            </div>
            <Image linkToImage={BurgerFriesBanner} name={'foodie-img'} className={'banner-image'}/>
        </header>
    );
};

export default Banner;

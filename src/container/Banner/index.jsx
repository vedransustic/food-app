import './index.css'
import Image from "../../components/Image";

const Banner = () => {
    return (
        <header className="header">
            <div className='header-content'>
                <Image linkToImage={''} name={'logo'} className={'logo'}/>
                <div className="content-main">
                    <h1>Delicius food for your cravings</h1>
                    <p>We made fresh and healty meals with different recipes</p>
                    <button> View menu <i className="fas fa-long-arrow-alt-right">h</i></button>
                </div>
            </div>
            <Image linkToImage={'https://pittsfieldcafe.com/wp-content/uploads/2014/12/extras.png'} name={'foodie-img'} className={'banner-image'}/>
        </header>
    );
};

export default Banner;

import './index.css'
import Banner from "../../container/Banner";
import Menu from "../../container/Menu";
import Footer from "../../container/Footer";
import CartButton from "../../container/CartButton";

const Home = () => {
    return (
        <div>
            <Banner/>
            <Menu/>
            <Footer/>
            <CartButton/>
        </div>
    );
};

export default Home;

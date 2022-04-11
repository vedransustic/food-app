import './index.css'
import Banner from "../../container/Banner";
import Menu from "../../container/Menu";

const Home = ({list}) => {
    return (
        <>
            <Banner/>
            <Menu list={ list }/>
        </>
    );
};

export default Home;

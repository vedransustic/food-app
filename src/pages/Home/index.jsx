import { Banner } from "../../components";
import { Menu } from "../../container";
import './index.css'

const Home = ({ list }) => {
    return (
        <>
            <Banner/>
            <Menu list={ list }/>
        </>
    );
};

export default Home;

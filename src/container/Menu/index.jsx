import MenuCardItem from "../../components/MenuCardItem";
import './index.css'

const Menu = ({list}) => {
    return (
        <main>
            {
                list.map(item => <MenuCardItem key={item.id} item={item} />)
            }
        </main>
    );
};

export default Menu;

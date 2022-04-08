import './index.css'
import { menuItemData } from "../../const";
import MenuCardItem from "../../components/MenuCardItem";
import './index.css'

const Menu = () => {
    return (
        <main>
            {
                menuItemData.map(item => <MenuCardItem key={item.id} {...item} />)
            }
        </main>
    );
};

export default Menu;

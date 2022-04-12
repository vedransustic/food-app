import { MenuCardItem } from "../";
import './index.css'
import {useMemo} from "react";

const Menu = ({ list }) => {
    const listedItems = useMemo(() => list, [list])
    return (
        <main>
            {
                listedItems.map(item => <MenuCardItem key={item.id} item={item} />)
            }
        </main>
    );
};

export default Menu;

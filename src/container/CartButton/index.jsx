import './index.css'
import { Link } from "react-router-dom";

const CartButton = ({ cartCount }) => {
    return (
        <Link to='/cart'>
            <div className='btnCartCount'>
                <div className="count">{ cartCount >= 100 ? '99+' : cartCount }</div>
                <i className="fas fa-shopping-cart"/>
            </div>
        </Link>
    );
};

export default CartButton;

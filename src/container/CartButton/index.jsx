import './index.css'

const CartButton = ({ cartCount }) => {
    return (
        <div className='btnCartCount'>
            <div className="count">{ cartCount >= 100 ? '99+' : cartCount }</div>
            <i className="fas fa-shopping-cart"/>
        </div>
    );
};

export default CartButton;

import { Menu } from "../../container";
import { Image, Button } from "../../components";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartItemsCount, selectCartTotal } from "../../redux/selectors/cartSelector";
import './index.css'
import EmptyCart from '../../img/EmptyCart.png'

const Cart = ({ cartCount, cartList, cartTotal }) => {

    if(!cartCount){
        return(
            <>
                <div className="order empty">
                    <Image name='empty/cart' linkToImage={ EmptyCart } className='empty-cart'/>
                    <div className='button-div'>
                        <Link to='/menu' style={{ textDecoration: 'inherit', color: "inherit" }}>
                            <Button displayFas={ true } text='Shop Now' faClassName='fas fa-long-arrow-alt-left' className='cart-button'/>
                        </Link>
                    </div>
                </div>
            </>

        )
    }

    return (
        <>
            <div className="order">
                <h1 className="orders-heading">Your Orders
                </h1>
                <div className="orders-menu">
                    <Menu list={ cartList }/>
                </div>
                <Link to='/menu' style={{textDecoration: 'inherit', color: "inherit"}}>
                    <Button className='to-menu-button' displayFas={true} text='Back to Menu' faClassName='fas fa-long-arrow-alt-right'/>
                </Link>
                <h3 className="orders-total">
                    Total: { parseFloat(cartTotal).toFixed(2) } $
                </h3>
            </div>
        </>
    );
};

const mapStateToProps = createStructuredSelector({
    cartCount: selectCartItemsCount,
    cartList: selectCartItems,
    cartTotal: selectCartTotal
})

export default connect(mapStateToProps)(Cart);

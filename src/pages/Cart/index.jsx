import './index.css'
import Menu from "../../container/Menu";
import Image from "../../components/Image";
import EmptyCart from '../../img/EmptyCart.png'
import Button from "../../components/Button";
import {Link} from "react-router-dom";
import {createStructuredSelector} from "reselect";
import {selectCartItems, selectCartItemsCount, selectCartTotal} from "../../redux/selectors/cartSelector";
import {connect} from "react-redux";

const Cart = ({cartCount, cartList, cartTotal}) => {

    if(!cartCount){
        return(
            <>
                <div className="order empty">
                    <Image name='empty/cart' linkToImage={EmptyCart} className='empty-cart'/>
                    <Link to='/menu' style={{textDecoration: 'inherit', color: "inherit"}}>
                        <Button displayFas={true} text='Shop Now' faClassName='fas fa-long-arrow-alt-left' className='cart-button'/>
                    </Link>
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
                    <Menu list={cartList}/>
                </div>
                <h3 className="orders-total">
                    Total: {cartTotal} $
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

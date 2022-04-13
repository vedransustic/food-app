import {memo, useMemo} from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItemsCount } from "../../redux/selectors/cartSelector";
import './index.css'

const CartButton = ({ cartCount }) => {
    const counter = useMemo(() => cartCount, [cartCount])
    return (
        <Link to='/cart'>
            <div className='btnCartCount'>
                <div className="count">{ counter >= 100 ? '99+' : cartCount }</div>
                <i className="fas fa-shopping-cart"/>
            </div>
        </Link>
    );
};

const mapStateToProps = createStructuredSelector({
    cartCount: selectCartItemsCount,
})

export default connect(mapStateToProps)(memo(CartButton));

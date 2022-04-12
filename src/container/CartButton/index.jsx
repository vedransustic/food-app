import './index.css'
import { Link } from "react-router-dom";
import {createStructuredSelector} from "reselect";
import {selectCartItemsCount} from "../../redux/selectors/cartSelector";
import {connect} from "react-redux";

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

const mapStateToProps = createStructuredSelector({
    cartCount: selectCartItemsCount,
})

export default connect(mapStateToProps)(CartButton);

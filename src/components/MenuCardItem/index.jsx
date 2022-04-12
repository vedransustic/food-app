import React from 'react';
import './index.css'
import Image from "../Image";
import AddRemoveButton from "../AddRemoveItem";
import {createStructuredSelector} from "reselect";
import {selectCartItems, selectCartItemsCount} from "../../redux/selectors/cartSelector";
import {cartAddItem, cartRemoveItem} from "../../redux/actions/cartActions";
import {connect} from "react-redux";

const MenuCardItem = ({item, cartList, cartCount, cartAddItem, cartRemoveItem}) => {

    const { id, img, name, info, price } = item

    const handleItemQuantity = () => {
        let quantity = 0;
        if( cartCount !== 0 ){
            const foundItemInCart = cartList.find(item => item.id === id)
            if( foundItemInCart ){
                quantity = foundItemInCart.quantity
            }
        }
        return quantity
    }

    return (
        <div className='card'>
            <Image name='food' linkToImage={img} className='card-img'/>
            <div className="card-content">
                <div className="card-head_desc">
                    <p className='head_desc-name'>{name}</p>
                    <p className='head_desc-info'>
                        <small> {info} </small>
                    </p>
                </div>
                <span className='foot_desc-price'>{parseFloat(price).toFixed(2)} $</span>
                <AddRemoveButton
                    quantity={handleItemQuantity()}
                    handleAddItem={() => cartAddItem(item)}
                    handleRemoveItem={() => cartRemoveItem(item)}
                />
            </div>

        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cartCount: selectCartItemsCount,
    cartList: selectCartItems,
})

const mapDispatchToProps = dispatch => ({
    cartAddItem: item => dispatch(cartAddItem(item)),
    cartRemoveItem: item => dispatch(cartRemoveItem(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(MenuCardItem);
import React from 'react';
import './index.css'

const AddRemoveButton = ({ quantity, handleAddItem, handleRemoveItem }) => {
    return (
        <div className='btnAddRemove'>
            {
                quantity !== 0 ? (
                    <div className='btnAddRemove-positive'>
                        <i className="fa fa-minus" onClick={handleRemoveItem}/>
                        <span>{quantity}</span>
                        <i className="fa fa-plus" onClick={handleAddItem}/>
                    </div>
                ):(
                    <div className='btnAddRemove-negative' >
                        <span>ADD</span>
                        <i className="fa fa-plus" onClick={handleAddItem}/>
                    </div>
                )
            }
        </div>
    );
};

export default AddRemoveButton;
/*

onClick={handleRemoveItem}
onClick={handleAddItem}
*/

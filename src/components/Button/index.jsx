import React from 'react';
import './index.css'

const Button = ({displayFas, text, className, faClassName}) => {
    return (
        <button className={className}>
            {text}
            { displayFas && <i className={faClassName}/> }
        </button>
    );
};

export default Button;
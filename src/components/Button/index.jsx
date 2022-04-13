import { useMemo } from 'react';
import './index.css'

const Button = ({displayFas, text, className, faClassName}) => {
    return useMemo(()  => {
        return (
            <button className={className}>
                {text}
                {displayFas && <i className={faClassName}/>}
            </button>
        );
    }, [className, displayFas, faClassName, text])
};

export default Button;
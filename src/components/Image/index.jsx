import { useMemo } from "react";
import './index.css'

const Image = ({ linkToImage, name, className }) => {
    return useMemo(() => {
        return <img src={linkToImage} alt={name} className={className}/>
    }, [className, linkToImage, name])

};

export default Image;

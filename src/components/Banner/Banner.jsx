import React from "react";
import './Banner.css';
// import MaskGroup from "../img/Mask_Group.png"

function Banner({image, title}) {
    let divTitle;
    if(title) {
        divTitle = <div className="centered">{title}</div>;
    }
    return (
        <div id="banner">
            <img src={image} alt="bannière" />

            {divTitle}
        </div>

    )
}

export default Banner;
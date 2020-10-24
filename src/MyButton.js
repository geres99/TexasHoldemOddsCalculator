import React from 'react';
import './MyButton.css';

function MyButton(props) {
    let additionalClass;
    if (props.variant === "dark") {
        additionalClass = "my-button-dark";
    } else {
        additionalClass = "my-button-light";
    }

    let allClasses = "my-button " + additionalClass;

return <button className={allClasses}>{props.dupa}</button>
}

export default MyButton;
import React from "react";
import "./ListItem.css";
import MyButton from "./MyButton";

function ListItem(props) {
    return <div className="list-item">
        <p>{props.displayText}</p>
        <MyButton dupa="hello!" variant={props.variant} />
    </div>
}

export default ListItem;
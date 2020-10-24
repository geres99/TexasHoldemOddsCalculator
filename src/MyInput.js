import React from 'react';
import './MyInput.css';
import InputButton from "./InputButton";
import MyDiv from "./MyDiv";

function MyInput(props) {
    let [textValue, setTextValue] = React.useState("");

    let onChange = function(e) {
        console.log(e.currentTarget.value);
        setTextValue(e.currentTarget.value);
    }

    return <div className = "MyInput">
    <input value={textValue} onChange={onChange} className="InputValue"></input>
    <InputButton itemText={textValue}/>
    <MyDiv dupa55={textValue}/>
    </div>
}

export default MyInput;
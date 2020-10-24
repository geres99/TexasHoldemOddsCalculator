import React from 'react';
import './App.css';
import ListItem from './ListItem';
import MyDiv from './MyDiv';
import MyInput from './MyInput';


function App() {
  let [items, setItems] = React.useState(["Eggs", "Milk"]);

let onClick = () => {
  setItems([...items, <MyDiv/>]);
}

  return (
    <div className="App">
      {items.map(q => <ListItem displayText={q}/>)}
      <MyInput/>
      <button onClick={onClick}>LOLOLO</button>
    </div>
  );
}

export default App;


// // ####

// let oldArr = ["A", "B"];
// let newArr = [];

// for (let item of oldArr) {
//   newArr.push(item);
// }
// newArr.push("Lol");

// // ####

// let oldArr = ["A", "B"];
// let newArr = [...oldArr, "Lol"];
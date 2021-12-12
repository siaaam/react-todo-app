import React, { useState } from 'react';
import Todolist from './Todolist';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [items, setItems] = useState([]);
  const itemHandler = (e) => {
    setInput(e.target.value);
  };

  const buttonHandler = () => {
    setItems((prev) => [...prev, input]);
    setInput('');
  };

  const deleteItemHandler = (id) => {
    setItems((prevItem) => {
      return prevItem.filter((arrElm, index) => {
        return id !== index;
      });
    });
  };

  return (
    <>
      <div className="main-div">
        <div className="center-div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add a Item"
            value={input}
            onChange={itemHandler}
          />
          <button onClick={buttonHandler}> + </button>

          <ol>
            {items.map((item, index) => {
              return (
                <Todolist
                  item={item}
                  key={index}
                  id={index}
                  onSelect={deleteItemHandler}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;

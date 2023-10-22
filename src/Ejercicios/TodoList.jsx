import React, { useState } from "react";

function TodoList() {
  const [items, setItems] = useState([]);

  function addItem() {
    const newItem = document.getElementById("newItem").value;
    setItems([...items, newItem]);
    document.getElementById("newItem").value = "";
  }

  function resetItems() {
    setItems([]);
  }

  function removeItem(index) {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  }

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <input type="text" id="newItem" />
      <button onClick={addItem}>Add Item</button>
      <button onClick={resetItems}>Reset</button>
    </div>
  );
}

export default TodoList;

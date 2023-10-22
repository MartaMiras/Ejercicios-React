import React, { useState } from "react";

function TodoList() {
  const [items, setItems] = useState([]);

  function addItem() {
    const newItem = document.getElementById("newItem").value;
    setItems([...items, newItem]);
    document.getElementById("newItem").value = "";
  }

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <input type="text" id="newItem" />
      <button onClick={addItem}>Add Item</button>
    </div>
  );
}

import React, { useState } from 'react';

function TodoList() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const handleAddItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="new item"
        />
        <button onClick={handleAddItem}>Add</button>
      </div>
    </div>
  );
}

export default TodoList;

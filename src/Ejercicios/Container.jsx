import React, { useState } from 'react';
import './container.css';

function Container({ title, children }) {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`container ${collapsed ? 'collapsed' : ''}`}>
      <h2 className="container-title" onClick={toggleCollapse}>
        {title}
      </h2>
      {children}
    </div>
  );
}

export default Container;

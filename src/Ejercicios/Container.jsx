import React from 'react';
import './container.css';

function Container({ title, children }) {
  return (
    <div className="container">
      {title && <h2 className="container-title">{title}</h2>}
      {children}
    </div>
  );
}

export default Container;

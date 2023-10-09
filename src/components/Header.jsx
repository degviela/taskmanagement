import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Header() {
  return (
    <div className="header">
      <h1>Task Manager</h1>
      {}
      <button className = "add-button">
      <Link to="/Insert">
        Add
      </Link>
      </button>
    </div>
  );
}

export default Header;


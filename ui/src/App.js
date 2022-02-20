import React from 'react';
import { Link, useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();

  const handleClick = (e, path) => {
    e.preventDefault();
    navigate(path);
  }

  return (
      <div>
        <ul>
          <li>
            <Link to="/" >Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={(e) => handleClick(e, "/about")}>About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>
      </div>
  );
};

export default App;

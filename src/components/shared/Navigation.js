import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
      <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/policy_categories">Policy Category List</Link></li>
      </ul>
      <hr/>
    </div>
  )
};

export default Navigation;

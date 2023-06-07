import React from 'react';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="container">
        <ul>
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">Map</a></li>
          <li><a href="#">Statistics</a></li>
          <li><a href="#">Reports</a></li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;

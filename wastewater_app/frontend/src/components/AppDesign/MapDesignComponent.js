import React from 'react';
import './MapDesignComponent.css';

const MapDesignComponent = () => {
  return (
    <div className="container-fluid p-0">
      <div className="row">
        <div className="col-md-2 sidebar">
          <ul className="list-group">
            <li className="list-group-item">
              <a href="#">Dashboard</a>
            </li>
            <li className="list-group-item">
              <a href="#">Charts</a>
            </li>
            <li className="list-group-item">
              <a href="#">Reports</a>
            </li>
            <li className="list-group-item">
              <a href="#">Tables</a>
            </li>
            <li className="list-group-item">
              <a href="#">Profile</a>
            </li>
            <li className="list-group-item">
              <a href="#">Settings</a>
            </li>
            <li className="list-group-item">
              <a href="#">Password</a>
            </li>
            <li className="list-group-item">
              <a href="#">Tasks</a>
            </li>
            <li className="list-group-item">
              <a href="#">Calendar</a>
            </li>
            <li className="list-group-item">
              <a href="#">Messages</a>
            </li>
            <li className="list-group-item">
              <a href="#">Help</a>
            </li>
          </ul>
        </div>
        <div className="col-md-10 content">
          <h1>Collapsing Menu</h1>
          <div className="card">
            <div className="card-header">Requirements</div>
            <div className="card-body">
              <ul>
                <li>JQuery</li>
                <li>Bootstrap 4 beta-3</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapDesignComponent;

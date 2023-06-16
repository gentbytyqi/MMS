import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDashboard, faUser, faTasks, faCalendar, faEnvelope, faFolder } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <aside>
      <ul id="sidebar-container" className="list-group">
        <li
          className="list-group-item sidebar-separator-title text-muted d-flex align-items-center menu-collapsed"
          style={{
            backgroundColor: '#132644',
            height: '35px',
            border: 'none'
          }}
        >
          <small style={{ color: 'white' }}>MAIN MENU</small>
        </li>
        <a
          href="#submenu1"
          data-toggle="collapse"
          aria-expanded="false"
          className="bg-dark list-group-item list-group-item-action flex-column align-items-start"
          style={{ textDecoration: 'none' }}
        >
          <div className="d-flex w-100 justify-content-start align-items-center">
            <FontAwesomeIcon icon={faDashboard} className="fa-fw mr-3" />
            <span className="menu-collapsed" style={{ color: 'white' }}>
              Dashboard
            </span>
            <span className="submenu-icon ml-auto"></span>
          </div>
        </a>
        <div
          id="submenu1"
          className="collapse sidebar-submenu"
          style={{ paddingLeft: '45px' }}
        >
          <a
            href="#"
            className="list-group-item list-group-item-action bg-dark text-white"
            style={{ textDecoration: 'none' }}
          >
            <span className="menu-collapsed">Charts</span>
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action bg-dark text-white"
            style={{ textDecoration: 'none' }}
          >
            <span className="menu-collapsed">Reports</span>
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action bg-dark text-white"
            style={{ textDecoration: 'none' }}
          >
            <span className="menu-collapsed">Tables</span>
          </a>
        </div>
        <a
          href="#submenu2"
          data-toggle="collapse"
          aria-expanded="false"
          className="bg-dark list-group-item list-group-item-action flex-column align-items-start"
          style={{ textDecoration: 'none' }}
        >
          <div className="d-flex w-100 justify-content-start align-items-center">
            <FontAwesomeIcon icon={faUser} className="fa-fw mr-3" />
            <span className="menu-collapsed" style={{ color: 'white' }}>
              Profile
            </span>
            <span className="submenu-icon ml-auto"></span>
          </div>
        </a>
        <div
          id="submenu2"
          className="collapse sidebar-submenu"
          style={{ paddingLeft: '45px' }}
        >
          <a
            href="#"
            className="list-group-item list-group-item-action bg-dark text-white"
            style={{ textDecoration: 'none' }}
          >
            <span className="menu-collapsed">Settings</span>
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action bg-dark text-white"
            style={{ textDecoration: 'none' }}
          >
            <span className="menu-collapsed">Password</span>
          </a>
        </div>
        <a
          href="#"
          className="bg-dark list-group-item list-group-item-action"
          style={{ textDecoration: 'none' }}
        >
          <div className="d-flex w-100 justify-content-start align-items-center">
            <FontAwesomeIcon icon={faTasks} className="fa-fw mr-3" />
            <span className="menu-collapsed" style={{ color: 'white' }}>
              Tasks
            </span>
          </div>
        </a>
        <li
          className="list-group-item sidebar-separator-title text-muted d-flex align-items-center menu-collapsed"
          style={{
            backgroundColor: '#132644',
            height: '35px',
            border: 'none'
          }}
        >
          <small style={{ color: 'white' }}>OPTIONS</small>
        </li>
        <a
          href="#"
          className="bg-dark list-group-item list-group-item-action"
          style={{ textDecoration: 'none' }}
        >
          <div className="d-flex w-100 justify-content-start align-items-center">
            <FontAwesomeIcon icon={faCalendar} className="fa-fw mr-3" />
            <span className="menu-collapsed" style={{ color: 'white' }}>
              Calendar
            </span>
          </div>
        </a>
        <a
          href="#"
          className="bg-dark list-group-item list-group-item-action"
          style={{ textDecoration: 'none' }}
        >
          <div className="d-flex w-100 justify-content-start align-items-center">
            <FontAwesomeIcon icon={faEnvelope} className="fa-fw mr-3" />
            <span className="menu-collapsed" style={{ color: 'white' }}>
              Messages
              <span className="badge badge-pill badge-primary ml-2">5</span>
            </span>
          </div>
        </a>
        <a
          href="#"
          className="bg-dark list-group-item list-group-item-action"
          style={{ textDecoration: 'none' }}
        >
          <div className="d-flex w-100 justify-content-start align-items-center">
            <FontAwesomeIcon icon={faFolder} className="fa-fw mr-3" />
            <span className="menu-collapsed" style={{ color: 'white' }}>
              Folders
            </span>
          </div>
        </a>
      </ul>
    </aside>
  );
};

export default Sidebar;

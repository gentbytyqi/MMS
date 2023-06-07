import React from 'react';
import './MapDesignComponent.css';

const MapDesignComponent = () => {
  // Hide submenus
  const hideSubmenus = () => {
    const submenus = document.querySelectorAll('#body-row .collapse');
    submenus.forEach((submenu) => {
      submenu.classList.remove('show');
    });
  };

  // Collapse/Expand icon
  const toggleSidebar = () => {
    const menuCollapsed = document.querySelectorAll('.menu-collapsed');
    const sidebarSubmenu = document.querySelectorAll('.sidebar-submenu');
    const submenuIcon = document.querySelectorAll('.submenu-icon');
    const sidebarContainer = document.getElementById('sidebar-container');
    const separatorTitle = document.querySelector('.sidebar-separator-title');

    menuCollapsed.forEach((menuItem) => {
      menuItem.classList.toggle('d-none');
    });

    sidebarSubmenu.forEach((submenu) => {
      submenu.classList.toggle('d-none');
    });

    submenuIcon.forEach((icon) => {
      icon.classList.toggle('d-none');
    });

    sidebarContainer.classList.toggle('sidebar-expanded');
    sidebarContainer.classList.toggle('sidebar-collapsed');

    // Treating d-flex/d-none on separators with title
    if (separatorTitle.classList.contains('d-flex')) {
      separatorTitle.classList.remove('d-flex');
    } else {
      separatorTitle.classList.add('d-flex');
    }
  };

  return (
    <div className="container-fluid p-0">
      <div className="row" id="body-row">
        <div
          id="sidebar-container"
          className="sidebar-expanded d-none d-md-block"
        >
          <ul className="list-group">
            <li className="list-group-item sidebar-separator-title text-muted d-flex align-items-center menu-collapsed">
              <small>MAIN MENU</small>
            </li>
            <a
              href="#submenu1"
              data-toggle="collapse"
              aria-expanded="false"
              className="bg-dark list-group-item list-group-item-action flex-column align-items-start"
            >
              <div className="d-flex w-100 justify-content-start align-items-center">
                <span className="fa fa-dashboard fa-fw mr-3"></span>
                <span className="menu-collapsed">Dashboard</span>
                <span className="submenu-icon ml-auto"></span>
              </div>
            </a>
            <div id="submenu1" className="collapse sidebar-submenu">
              <a
                href="#"
                className="list-group-item list-group-item-action bg-dark text-white"
              >
                <span className="menu-collapsed">Charts</span>
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action bg-dark text-white"
              >
                <span className="menu-collapsed">Reports</span>
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action bg-dark text-white"
              >
                <span className="menu-collapsed">Tables</span>
              </a>
            </div>
            {/* Remaining list items */}
          </ul>
        </div>

        <div className="col">
          <h1>
            Collapsing Menu
            <small className="text-muted">Version 2.1</small>
          </h1>

          <div className="card">
            <h4 className="card-header">Requirements</h4>
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

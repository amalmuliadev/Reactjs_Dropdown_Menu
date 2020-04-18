import React, { useState } from 'react';
import { ReactComponent as WorldIcon } from './icons/world.svg';
import { ReactComponent as BellIcon } from './icons/bell.svg';
import { ReactComponent as SettingIcon } from './icons/setting.svg';
import { ReactComponent as ChevronIcon } from './icons/right.svg';
import { ReactComponent as CaretIcon } from './icons/caret.svg';

import { CSSTransition } from 'react-transition-group';

function App() {
  return (
    <Navbar>
      <NavItem icon={<WorldIcon />} />
      <NavItem icon={<BellIcon />} />
      <NavItem icon={<SettingIcon />} />

      <NavItem icon={<CaretIcon />}>
        <DropdownMenu />
      </NavItem>

    </Navbar>
  );
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState('main');

  function DropdownItem(props) {
    return (
    <a href="#" className="menu-item">
      <span className="icon-button">{props.leftIcon}</span>
      {props.children}

      <span className="icon-right">{props.RightIcon}</span>
    </a>
    );
  }

  return (
    <div className="dropdown">
      <CSSTransition 
        in={activeMenu === 'main'} 
        unmountOnExit
        timeout={500}
        className="menu-primary"
        >
          <div className="menu">
            <DropdownItem>My Profile</DropdownItem>
            <DropdownItem 
              leftIcon={<SettingIcon />}
              rightIcon={<ChevronIcon />}
              
              >Setting</DropdownItem>
          </div>

      </CSSTransition>
    </div>
  )
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav"> { props.children }</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        { props.icon }
      </a>

      {open && props.children}
    </li>
  );
}

export default App;

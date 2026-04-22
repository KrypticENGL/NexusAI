import React from 'react';
import { Bell, Menu, Search } from 'lucide-react';

const Header = ({ onMenuToggle }) => {
  return (
    <header className="header">
      <div className="mobile-menu">
        <button className="menu-button" onClick={onMenuToggle} aria-label="Toggle menu">
          <Menu size={24} />
        </button>
        <span className="sidebar-logo-text">SUSE-Health</span>
      </div>

      <div className="search-bar">
        <Search size={20} className="search-icon" />
        <input 
          type="text" 
          placeholder="Search health records, symptoms..." 
          className="search-input"
        />
      </div>

      <div className="header-actions">
        <button className="notification-btn">
          <Bell size={24} />
          <span className="notification-dot"></span>
        </button>
        <button className="mobile-avatar">
            AM
        </button>
      </div>
    </header>
  );
};

export default Header;

import React from 'react';
import { Home, FileText, Calendar, Activity, Settings, User } from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { icon: <Home size={24} />, label: 'Dashboard', active: true },
    { icon: <Activity size={24} />, label: 'My Health' },
    { icon: <FileText size={24} />, label: 'Records' },
    { icon: <Calendar size={24} />, label: 'Appointments' },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo-icon">
          S
        </div>
        <h1 className="sidebar-logo-text">Serene</h1>
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className={`nav-item ${item.active ? 'active' : ''}`}
          >
            {item.icon}
            <span>{item.label}</span>
          </a>
        ))}
      </nav>

      <div className="sidebar-footer">
         <a href="#" className="nav-item">
            <Settings size={24} />
            <span>Settings</span>
          </a>
          <div className="user-profile">
             <div className="user-avatar">
                <User size={20} />
             </div>
             <div className="user-info">
               <span className="user-name">Alex Morgan</span>
               <span className="user-role">Patient</span>
             </div>
          </div>
      </div>
    </aside>
  );
};

export default Sidebar;

import React from 'react';
import { Link } from 'react-router-dom';
import '../css/sidebar.css';

const Sidebar = ({ isCollapsed, toggleSidebar }) => {
    return (
        <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
            <div className="toggle-btn" onClick={toggleSidebar}>
                {isCollapsed ? 'open' : 'close'}
            </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </aside>
    );
};

export default Sidebar;

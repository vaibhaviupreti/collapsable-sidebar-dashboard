import React from 'react';
import { Link } from 'react-router-dom';
import '../css/sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ isCollapsed, toggleSidebar }) => {
    return (
        <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
            <div className="toggle-btn" onClick={toggleSidebar}>
                {isCollapsed ? 'open' : 'close'}
            </div>
            <ul>
                <li><Link to="/"><FontAwesomeIcon className='mr-20' icon={faHome} />Home</Link></li>
                <li><Link to="/about"><FontAwesomeIcon className='mr-20' icon={faInfoCircle} />About</Link></li>
                <li><Link to="/allemployees"><FontAwesomeIcon className='mr-20' icon={faInfoCircle} />All employees</Link></li>
            </ul>
        </aside>
    );
};

export default Sidebar;

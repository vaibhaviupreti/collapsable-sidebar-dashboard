import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/sidebar.css';

const Sidebar = ({ isSidebarCollapsed, handleSidebarToggle }) => {
    const [show, setShow] = useState(isSidebarCollapsed);

    const toggleSidebar = () => {
        setShow(!show);
        handleSidebarToggle();
    };

    return (
        <main className={show ? 'space-toggle' : null}>
            <header className={`header ${show ? 'space-toggle' : null}`}>
                <div className='header-toggle' onClick={toggleSidebar}>
                    <i className={`fas fa-bars ${show ? 'fa-solid fa-xmark' : null}`}>click</i>
                </div>
            </header>

            <aside className={`sidebar ${show ? 'show' : null}`}>
                <nav className='nav'>
                    <div>
                        <Link to='/' className='nav-logo'>
                            <i className={`fas fa-home-alt nav-logo-icon`}></i>
                            <span className='nav-logo-name'>H</span>
                            <span className='nav-logo-name'>Homepage</span>
                        </Link>

                        <div className='nav-list'>
                            <Link to='/dashboard' className='nav-link active'>
                                <span className='nav-link-name'>D</span>
                                <span className='nav-link-name'>Dashboard</span>
                            </Link>
                            <Link to='/about' className='nav-link active'>
                                <span className='nav-link-name'>D</span>
                                <span className='nav-link-name'>About us</span>
                            </Link>
                            {/* more links ..... */}
                        </div>
                    </div>

                    <Link to='/logout' className='nav-link'>
                        <span className='nav-link-name'>L</span>
                        <span className='nav-link-name'>Logout</span>
                    </Link>
                </nav>
            </aside>
        </main>
    );
};

export default Sidebar;

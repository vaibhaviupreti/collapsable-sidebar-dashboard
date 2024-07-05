import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Sidebar from './components/sidebar';
import Home from './components/home';
import About from './components/about';
import Header from './components/header';
import Login from './pages/login';

const AppContent = ({ isSidebarCollapsed, toggleSidebar }) => {
    const location = useLocation();
    const isLoginRoute = location.pathname === '/login';

    return (
        <>
            {!isLoginRoute && <Header />}
            {!isLoginRoute && <Sidebar isCollapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar} />}
            <div className={`content ${isSidebarCollapsed ? 'collapsed' : ''}`}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </div>
        </>
    );
};

export default AppContent;

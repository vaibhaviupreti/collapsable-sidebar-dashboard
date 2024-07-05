import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import About from './components/about';
import Login from './pages/login';
import Dashboard from './components/dashboard';

const AppContent = ({ isSidebarCollapsed }) => {
    const location = useLocation();
    const isLoginRoute = location.pathname === '/login';

    return (
        <>
            {!isLoginRoute && <div className={`content ${isSidebarCollapsed ? 'collapsed' : ''}`}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </div>}
        </>
    );
};

export default AppContent;

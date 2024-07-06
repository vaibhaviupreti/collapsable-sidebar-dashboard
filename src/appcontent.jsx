import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Sidebar from './components/sidebar';
import Home from './components/home';
import About from './components/about';
import Header from './components/header';
import Login from './pages/login';
import AllEmployeeTable from './components/Employee/AllEmployeeTable';
import AddEmployee from './components/Employee/AddEmployee';
import AddProject from './components/Projects/AddProject';

const AppContent = ({ isSidebarCollapsed, toggleSidebar }) => {
    const location = useLocation();
    const isLoginRoute = location.pathname === '/login';

    return (
        <>
            {/* {!isLoginRoute && <Header />} */}
            {!isLoginRoute && <Sidebar isCollapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar} />}
            {!isLoginRoute && <Header isCollapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar} />}
            <div className={`content ${isSidebarCollapsed ? 'collapsed' : ''}`}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/allemployees" element={<AllEmployeeTable />} />
                    {/* employee */}
                    <Route path="/addemployee" element={<AddEmployee title="Add Employee" />} />
                    <Route path="/editemployee" element={<AddEmployee title="Edit Employee" />} />
                    {/* projects */}
                    <Route path="/addproject" element={<AddProject title="Add Project" />} />
                    <Route path="/editproject" element={<AddProject title="Edit Project" />} />
                </Routes>
            </div>
        </>
    );
};

export default AppContent;

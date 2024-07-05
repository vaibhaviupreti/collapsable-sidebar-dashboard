import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AppContent from "./appcontent";
import Sidebar from './components/sidebar';
function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };
  return (
    <Router>
      <div className="App">
      <Sidebar isSidebarCollapsed={isSidebarCollapsed} handleSidebarToggle={handleSidebarToggle} />
        <AppContent isSidebarCollapsed={isSidebarCollapsed} />
      </div>
    </Router>
  );
}

export default App;

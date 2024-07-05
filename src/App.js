import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AppContent from "./appcontent";

function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <Router>
      <div className="App">
        <AppContent isSidebarCollapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar} />
      </div>
    </Router>
  );
}

export default App;

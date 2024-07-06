import React from "react";
import "../css/header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faBars, faPlus, faMinus  } from '@fortawesome/free-solid-svg-icons';

const Header = ({ isCollapsed, toggleSidebar }) => {
    return (
        <header className="header">
           <div 
           className={`content-header ${isCollapsed ? 'collapsed' : ''}`}
           style={{display:'flex',alignItems:'center'}}
           >
           <div className="hamburger-btn" onClick={toggleSidebar}>
                {isCollapsed ?
                    <FontAwesomeIcon icon={faBars} />
                    :
                    <FontAwesomeIcon icon={faBars} />
                }
            </div>
            {/* <h3 style={{fontSize:'16px'}}>My App</h3> */}
           </div>
        </header>
    );
};

export default Header;
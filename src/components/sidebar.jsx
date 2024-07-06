import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faBars, faPlus, faMinus  } from '@fortawesome/free-solid-svg-icons';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';

const data = [
    {
        id: '1',
        title: 'Employee',
        subItems: [
            { id: '1a', title: 'All Employees', link: '/allemployees' },
            { id: '1b', title: 'Add Employee', link: '/addemployee' },
            { id: '1b', title: 'Edit Employee', link: '/editemployee' }
        ]
    },
    {
        id: '2',
        title: 'Projects',
        subItems: [
            { id: '1a', title: 'All Projects', link: '/allemployees' },
            { id: '1b', title: 'Add Projects', link: '/addemployee' },
            { id: '1b', title: 'Edit Projects', link: '/editemployee' }
        ]
    },
    {
        id: '3',
        title: 'Attendance',
        subItems: [
            { id: '1a', title: 'Today Attendance', link: '/allemployees' },
            { id: '1b', title: 'Employee Attendance', link: '/addemployee' },
        ]
    },
    {
        id: '4',
        title: 'Clients',
        subItems: [
            { id: '1a', title: 'All Client', link: '/allemployees' },
            { id: '1b', title: 'Add Client', link: '/addemployee' },
            { id: '1b', title: 'Edit Client', link: '/editemployee' }
        ]
    },
];

const Sidebar = ({ isCollapsed, toggleSidebar }) => {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
            {/* <div className="toggle-btn" onClick={toggleSidebar}>
                {isCollapsed ?
                    <FontAwesomeIcon icon={faBars} />
                    :
                    <FontAwesomeIcon icon={faBars} />
                }
            </div> */}
            <ul>
                <li><Link to="/"><FontAwesomeIcon className='mr-20' icon={faHome} />Home</Link></li>
                <li><Link to="/about"><FontAwesomeIcon className='mr-20' icon={faInfoCircle} />About</Link></li>
            </ul>
            {data.map((item) => (
                <Accordion expanded={expanded === item.id} onChange={handleChange(item.id)} key={item.id}
                sx={{
                    '&.MuiAccordion-root': {
                        boxShadow: 'none',
                        border: 'none',
                    }
                }}
                >
                    <AccordionSummary
                        // expandIcon={<FontAwesomeIcon icon={faPlus} />}
                        expandIcon={<FontAwesomeIcon icon={expanded === item.id ? faMinus : faPlus} />}
                        aria-controls={`${item.id}bh-content`}
                        id={`${item.id}bh-header`}
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>
                            {item.title}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <ul>
                            {item.subItems.map((subItem) => (
                                <li key={subItem.id}>
                                    <Link to={subItem.link}>
                                        {subItem.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </AccordionDetails>
                </Accordion>
            ))}
           
        </aside>
    );
};

export default Sidebar;

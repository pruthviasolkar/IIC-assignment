import React, { useState, useEffect } from 'react';
import "../Sidebar/sidebar.css";
import { Link, NavLink } from 'react-router-dom';

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(true); // Default open for desktop

    useEffect(() => {
        // Check screen size on component mount
        if (window.innerWidth <= 768) {
            setIsOpen(false); // Close sidebar on mobile screens
        }
    }, []);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button className="toggleButton" onClick={toggleSidebar}>
                ☰
            </button>
            <div className={`mainsidebar ${isOpen ? 'open' : 'closed'}`}>
                
                <div className='sidebarlogo'>
                    <img src="/Assets/logodash.png" alt="Logo" />
                </div>
                <div className='line'></div>
                <div className='navlinksidebar'>
                    <ul>
                        <li><NavLink exact to="/s" activeClassName="active">
                            <div className='icondiv'>
                                <img src="/Assets/menu1 (1).png" alt="Menu1" />
                            </div>
                        </NavLink></li>
                        <li><NavLink exact to="/" activeClassName="active">
                            <div className='icondiv'>
                                <img src="/Assets/menu2.png" alt="Menu2" />
                            </div>
                        </NavLink></li>
                        <li><NavLink exact to="/s" activeClassName="active">
                            <div className='icondiv'>
                                <img src="/Assets/menu3.png" alt="Menu3" />
                            </div>
                        </NavLink></li>
                    </ul>
                </div>

                <div className='baseicon'>
                    <img src="/Assets/baseicon.png" alt="Base Icon" />
                </div>
            </div>
        </>
    );
}

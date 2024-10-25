import React from 'react'
import "../Sidebar/sidebar.css"
import { Link, NavLink } from 'react-router-dom';

export default function Sidebar() {
    return (
        <>
            <div className='mainsidebar'>
                
                <div className='sidebarlogo '>
                    <img src="/Assets/logodash.png" alt="" />
                </div>
                <div className='line'></div>
                <div className='navlinksidebar'>
                    <ul>
                        
                       
                       
                        <li><NavLink exact to="/s" activeClassName="active">
                        <div className='icondiv'>
                        <img src="/Assets/menu1 (1).png" alt="" /></div></NavLink></li>
                        <li><NavLink exact to="/" activeClassName="active">
                        <div className='icondiv'><img src="/Assets/menu2.png" alt="" /></div></NavLink></li>
                        <li><NavLink exact to="/s" activeClassName="active">
                        <div className='icondiv'><img src="/Assets/menu3.png" alt="" /></div></NavLink></li>
                    </ul>
                    
                </div>

                <div className='baseicon'><img src="/Assets/baseicon.png" alt="" /></div>
            </div>
        </>
    )
}

import React from 'react'
import './Navbar.styles.css'
import {NavLink} from 'react-router-dom'
function Navbar() {
    return (
        <div className='navbar'>
            <div className='navbar_header'>
                <NavLink className='navbar_link' to="/">
                <div className='header_img'>
                    <img src={process.env.PUBLIC_URL + '/Logo.png'} alt='brand_logo' />
                </div>
                </NavLink>
            </div>
            <div className='navbar_links_container'>
                <NavLink className='navbar_link'  to="/about">
                    About
                </NavLink>
                <NavLink className='navbar_link'  to="/search">
                    Search
                </NavLink>
                <NavLink className='navbar_link'  to="/contact">
                    Contact
                </NavLink>
            </div>
        </div>
    )
}

export default Navbar

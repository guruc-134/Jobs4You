import React from 'react'
import './Navbar.styles.css'
import {NavLink} from 'react-router-dom'
function Navbar() {
    const selected ={
        fontWeight:'bold',
        borderBottom:'4px solid white',
    }
    return (
        <div className='navbar'>
            <div className='navbar_header'>
                <h1>
                    Jobs4You
                </h1>
            </div>
            <div className='navbar_links_container'>
                <NavLink className='navbar_link' activeStyle={selected} to="/">
                    Home
                </NavLink>
                <NavLink className='navbar_link' activeStyle={selected} to="/search">
                    Search
                </NavLink>
            </div>
        </div>
    )
}

export default Navbar

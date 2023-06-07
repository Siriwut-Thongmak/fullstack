import React from 'react'
import './NavBar.css'
import { NavLink } from 'react-router-dom'


export const NavBar = () => {
  return (
    <header>
        <nav>
            <ul className="main-nav">
                <li><NavLink to="/" className={({isActive}) => isActive ? 'app-header-item-active' : 'app-header-item'}>HomePage</NavLink></li>
                <li><NavLink to="/addForm"  className={({isActive}) => isActive ? 'app-header-item-active' : 'app-header-item'}>Add Patient</NavLink></li>
                <li><NavLink to="/dashboard"  className={({isActive}) => isActive ? 'app-header-item-active' : 'app-header-item'}>Dashboard</NavLink></li>
            </ul>
        </nav>
    </header>
  )
}

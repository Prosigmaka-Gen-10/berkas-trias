import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav>
        <NavLink to="/">
            Home
        </NavLink>
        <span> | </span>
        <NavLink to="about">
            About
        </NavLink>
        <span> | </span>
        <NavLink to="product">
            Product
        </NavLink>
        <span> | </span>
        <NavLink to="list-produk">
            List Product
        </NavLink>
        <span> | </span>
        <NavLink to="users">
            Users
        </NavLink>
    </nav>
  )
}

export default Navbar
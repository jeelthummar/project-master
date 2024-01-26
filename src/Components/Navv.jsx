import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import CSS from '../CSS/Navv.css'

const Navv = () => {
  return (
    <div id='nav'>
        <NavLink className='link' to="/">Home</NavLink>
        <Link className='link' to="/Product">Product</Link>
        <Link className='link' to="/Cart">Cart</Link>
        <Link className='link' to="/Signup">Signup</Link>
        <Link className='link' to="/Login">Login</Link>
    </div>
  )
}

export default Navv
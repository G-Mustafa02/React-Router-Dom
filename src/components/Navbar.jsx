import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {

    


  return (
    <div>
      <ul style={{
        listStyleType: 'none',
        display: 'flex',
        textDecorationLine: 'none',
        color: 'black',
        justifyContent:'space-evenly'
      }}>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='about'>About</Link></li>
        <li><Link to='contact'>Contact</Link></li>
        <li><Link to='product'>Product</Link></li>
        <li><Link to='services'>Services</Link></li>
      </ul>
    </div>
  )
}

export default Navbar

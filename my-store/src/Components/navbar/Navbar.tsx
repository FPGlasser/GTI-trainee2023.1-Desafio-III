import React from 'react'
import { NavLink } from 'react-router-dom'
import navlinks from './data/navlinks.json'

const Navbar = () => {
  return (
    <>
      <nav>
        <ul className="navbar__links">
          {
            navlinks.map((item) => (
            <li key={item.id}>
              <NavLink to={item.url}>{item.name}</NavLink>
            </li>))
          }
        </ul>
      </nav>
    </>
  )
}

export default Navbar
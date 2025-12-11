import React from 'react'

function Header() {
  return (
    <div>
    <nav className="navbar">
      <h2 className="logo">School Services</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/admissions">Admissions</Link>
        <Link to="/timetable">Timetable</Link>
        <Link to="/teachers">Teachers</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
    </div>
  )
}

export default Header



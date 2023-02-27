import Link from 'next/link'
import React from 'react'
import '../stylesDashboard.scss'
function Menu() {
  return (
    <nav className='mainMenu'>
      <a href="#">
        <img src="/images/logoDemo.png" width={70} height={70} className='imgLogo' alt="" />
      </a>
      <ul className='Menu'>
      <li className='item'><Link className='item_link' href="/dashboard">Dashboard</Link></li>
        <li className='item'><Link className='item_link' href="/dashboard/users">Users</Link></li>
        <li className='item'><Link className='item_link' href="/dashboard/courses">Courses</Link></li>
        <li className='item'><Link className='item_link' href="/dashboard/questions">Questions</Link></li>
        <li className='item'><Link className='item_link' href="/dashboard/categories">Categories</Link></li>
      </ul>
    </nav>
  )
}

export default Menu
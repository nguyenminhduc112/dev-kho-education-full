import Link from 'next/link'
import React, { useEffect, useState } from 'react'
// Import Reducer

// Import Css
import '../stylesDashboard.scss'

function Menu() {
  const [active, setActive] = useState('itemDashboard')
  useEffect(() => {
    const path = window.location.pathname
    if (path === '/dashboard') {
      setActive('itemDashboard')
    } else if (path === '/dashboard/users' || path === '/dashboard/users/add' || path === '/dashboard/users/edit') {
      setActive('itemUsers')
    } else if (path === '/dashboard/courses') {
      setActive('itemCourses')
    } else if (path === '/dashboard/questions') {
      setActive('itemQuestions')
    } else {
      setActive('itemCategories')
    }
  }, [])
  return (
    <nav className='mainMenu'>
      <a href="#">
        <img src="/images/logoDemo.png" width={70} height={70} className='imgLogo' alt="" />
      </a>
      <ul className='Menu'>
        <li className={`item ${active === 'itemDashboard' ? 'active' : ''}`} ><Link className='item_link' href="/dashboard">Dashboard</Link></li>
        <li className={`item ${active === 'itemUsers' ? 'active' : ''}`}  ><Link className='item_link' href="/dashboard/users">Users</Link></li>
        <li className={`item ${active === 'itemCourses' ? 'active' : ''}`} ><Link className='item_link' href="/dashboard/courses">Courses</Link></li>
        <li className={`item ${active === 'itemQuestions' ? 'active' : ''}`} ><Link className='item_link' href="/dashboard/questions">Questions</Link></li>
        <li className={`item ${active === 'itemCategories' ? 'active' : ''}`} ><Link className='item_link' href="/dashboard/categories">Categories</Link></li>
      </ul>
    </nav>
  )
}

export default Menu
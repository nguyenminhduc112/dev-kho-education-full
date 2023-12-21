import React, { useEffect, useState } from 'react'
import Link from 'next/link'

// Import Reducer

// Import Css
import '../stylesDashboard.scss'
import { useSession } from 'next-auth/react'
import { getUser } from 'Libs/fetch/user'
import { useQuery } from 'react-query'
import Image from 'next/image'

function Menu() {
  const { data: session } = useSession()
  const [active, setActive] = useState('itemDashboard')
  useEffect(() => {
    const path = window.location.pathname
    if (path === '/dashboard') {
      setActive('itemDashboard')
    } else if (path === '/dashboard/users' || path === '/dashboard/users/add' || path === '/dashboard/users/edit') {
      setActive('itemUsers')
    } else if (path === '/dashboard/courses' || path === '/dashboard/courses/add' || path === '/dashboard/courses/detail') {
      setActive('itemCourses')
    } else if (path === '/dashboard/questions' || path === '/dashboard/questions/detail') {
      setActive('itemQuestions')
    } else {
      setActive('itemCategories')
    }
  }, [])
  const userID = session ? session.user.id : ''
  const user = useQuery(['getUser', userID], () => getUser(userID))

  return (
    <nav className='mainMenu' style={{ backgroundColor: '#1b1d25' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 20 }}>
        <a href="#" style={{ display: 'block' }}>
          <Image src="/images/logo.png" width={300} height={70} className='imgLogo' style={{ borderRadius: '12px' }} alt="" />
        </a>
      </div>
      <ul className='Menu'>
        <li className={`item ${active === 'itemDashboard' ? 'active' : ''}`} ><Link className='item_link' href="/dashboard">Dashboard</Link></li>
        {user.data?.id_role == 4 || user.data?.id_role == 1 ? (<li className={`item ${active === 'itemUsers' ? 'active' : ''}`}  ><Link className='item_link' href="/dashboard/users">Users</Link></li>) : ""}
        <li className={`item ${active === 'itemCourses' ? 'active' : ''}`} ><Link className='item_link' href="/dashboard/courses">Courses</Link></li>
        {user.data?.id_role == 4 || user.data?.id_role == 1 ? (<li className={`item ${active === 'itemQuestions' ? 'active' : ''}`} ><Link className='item_link' href="/dashboard/questions">Questions</Link></li>) : ''}
        {user.data?.id_role == 1 ? (<li className={`item ${active === 'itemCategories' ? 'active' : ''}`} ><Link className='item_link' href="/dashboard/categories">Categories</Link></li>) : ""}
      </ul>
    </nav >
  )
}

export default Menu
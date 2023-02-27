import { signOut } from 'next-auth/react'
import React from 'react'
import '../stylesDashboard.scss'
function Header({name}) {
  return (
    <div className='header'>
        <h1 className='title'>{name}</h1>
        <div className="info">
            <img src="/images/avartar_users/avartar_admin.jpg" width={60} height={60} className='avartar' alt="" />
            <p className="nameUser">Nguyễn Minh Đức</p>
            <a href="#" onClick={_ => signOut()} className='btnLogout'>Logout</a>
        </div>
    </div>
  )
}

export default Header
import { signOut } from 'next-auth/react'
import React from 'react'
import '../stylesDashboard.scss'
import { useSession } from 'next-auth/react'
import { getUser } from 'Libs/fetch/user'
import { useQuery } from 'react-query'
import Image from 'next/image'
function Header({ name }) {
  const { data: session } = useSession()
  const userID = session ? session.user.id : ''
  const user = useQuery(['getUser', userID], () => getUser(userID))
  return (
    <div className='header'>
      <h1 className='title'>{name}</h1>
      <div className="info">
        <Image src="/images/avartar_users/avartar_admin.jpg" width={60} height={60} className='avartar' alt="" />
        <p className="nameUser">{user.data?.fullname}</p>
        <a href="#" onClick={_ => signOut()} className='btnLogout'>Đăng xuất</a>
      </div>
    </div>
  )
}

export default Header
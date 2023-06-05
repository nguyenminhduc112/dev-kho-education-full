import React, { useRef, useState } from 'react'
import './layout.scss'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { signOut } from 'next-auth/react'
import { Button, Drawer, TextField } from '@material-ui/core'
import { getUser } from 'Libs/fetch/user'
import { useQuery } from 'react-query'
import Link from 'next/link'

function Header() {
    const [open, setOpen] = useState(false)
    // Solution
    const menuRef = useRef()
    const imgRef = useRef()
    window.addEventListener('click', (e) => {
        if (e.target !== menuRef.current && e.target !== imgRef.current) {
            setOpen(false)
        }
    })
    const router = useRouter()
    const { data: session } = useSession()
    const changeToLogin = () => {
        router.push('/login')
    }
    if (session) {
        var userID = session.user.id
    }
    const user = useQuery(['user', userID], () => getUser(userID))


    return (
        <div className='header'>
            <div className='title'>
                <img src="/images/logo.png" width={150} height={150} alt="" />
            </div>
            <form id='formSearch'>
                <input id='serach' type="text" placeholder='Tìm kiếm các khóa học' name='q' className={'inputSearch'} />
                <button style={{ backgroundColor: '#2a2b36', width: 100, height: 46, color: 'white', borderRadius: 10, cursor: 'pointer', border: 'none' }}>Search</button>
            </form>
            {session ? (<div className="info relative">
                <img ref={imgRef} src="/images/avartar_users/avartar_admin.jpg" width={60} height={60} className='avartar' style={{ cursor: 'pointer' }} onClick={() => setOpen(!open)} alt="" />
                {open ? (<div ref={menuRef} className='bg-white px-4 py-6 w-60 shadow-lg absolute -left-24 top-16'>
                    <ul>
                        <li className='p-2 text-lg cursor-pointer rounded hover:bg-blue-100' ><Link href={`/my-info`}>Thông tin tài khoản</Link></li>
                        <li className='p-2 text-lg cursor-pointer rounded hover:bg-blue-100' ><Link href={'/my-course'}>Khóa học của tôi</Link></li>
                        <li className='p-2 text-lg cursor-pointer rounded hover:bg-blue-100' ><a href="#" onClick={_ => signOut()} >Đăng xuất</a></li>
                    </ul>
                </div>) : ''}
                <p className="nameUser">{user.data?.fullname}</p>
            </div>) : (<a href="#" onClick={changeToLogin} className='btnLogin'>Đăng nhập</a>)}

        </div>
    )
}

export default Header
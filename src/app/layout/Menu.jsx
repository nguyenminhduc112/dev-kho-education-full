import Link from 'next/link'
import React, { useEffect, useState } from 'react'

function Menu() {
    const [active, setActive] = useState('itemHome')
    useEffect(() => {
        const path = window.location.pathname
        if (path === '/') {
            setActive('itemHome')
        } else if (path === '/about') {
            setActive('itemAbout')
        } else if (path === '/roadmap') {
            setActive('itemRoadmap')
        } else if (path === '/blog') {
            setActive('itemBlog')
        } else if (path === '/category') {
            setActive('itemCategory')
        } else if (path === '/question') {
            setActive('itemQuestion')
        }
        else {
            setActive('')
        }
    }, [])
    return (
        <nav className='mainMenu'>
            <ul className='Menu'>
                <li className={`item ${active === 'itemHome' ? 'active' : ''}`} ><Link className='item_link' href="">Home</Link></li>
                <li className={`item ${active === 'itemAbout' ? 'active' : ''}`}  ><Link className='item_link' href="/about">Giới thiệu</Link></li>
                <li className={`item ${active === 'itemRoadmap' ? 'active' : ''}`} ><Link className='item_link' href="/roadmap">Lộ trình</Link></li>
                <li className={`item ${active === 'itemBlog' ? 'active' : ''}`} ><Link className='item_link' href="/blog">Blog</Link></li>
                <li className={`item ${active === 'itemCategory' ? 'active' : ''}`} ><Link className='item_link' href="/category">Mục lục</Link></li>
                <li className={`item ${active === 'itemQuestion' ? 'active' : ''}`} ><Link className='item_link' href="/question">Question</Link></li>
            </ul>
        </nav>
    )
}

export default Menu
"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'

function Menu() {
    const pathname = usePathname()
    return (
        <nav className='mainMenu'>
            <ul className='Menu'>
                <li className={`item ${pathname === '/' ? 'active' : ''}`} ><Link className='item_link' href="">Home</Link></li>
                <li className={`item ${pathname === '/about' ? 'active' : ''}`}  ><Link className='item_link' href="/about">Giới thiệu</Link></li>
                <li className={`item ${pathname === '/roadmap' ? 'active' : ''}`} ><Link className='item_link' href="/roadmap">Lộ trình</Link></li>
                <li className={`item ${pathname === '/blog' ? 'active' : ''}`} ><Link className='item_link' href="/blog">Blog</Link></li>
                <li className={`item ${pathname === '/category' ? 'active' : ''}`} ><Link className='item_link' href="/category">Mục lục</Link></li>
                <li className={`item ${pathname === '/question' ? 'active' : ''}`} ><Link className='item_link' href="/question">Question</Link></li>
            </ul>
        </nav>
    )
}

export default Menu
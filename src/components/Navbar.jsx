'use client'
import React, { useEffect, useRef, useState } from 'react'
import { useWindowScroll } from 'react-use'
import gsap from 'gsap'

const navItems = ['Home', 'Products', 'Download']

const Navbar = () => {
    const [hasFloatingNav, setHasFloatingNav] = useState(false)
    const [isActiveIndicator, setIsActiveIndicator] = useState(false)
    const [isNavVisible, setIsNavVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)
    const navContainerRef = useRef(null)
    const audioElRef = useRef(null)
    const toggleAudioIndicator = () => {
        setIsActiveIndicator((prev) => !prev)
        setIsAudioPlaying((prev) => !prev)
    }

    const { y: currentScrollY } = useWindowScroll()
    useEffect(() => {
        if (currentScrollY === 0) {
            setIsNavVisible(true)
            setHasFloatingNav(false)
        } else if (currentScrollY > lastScrollY) {
            setIsNavVisible(false)
            setHasFloatingNav(true)
        } else if (currentScrollY < lastScrollY) {
            setIsNavVisible(true)
            setHasFloatingNav(true)
        }
        setLastScrollY(currentScrollY)
    }, [currentScrollY, lastScrollY])

    useEffect(() => {
        gsap.to(navContainerRef.current, {
            y: isNavVisible ? 0 : -100,
            opacity: isNavVisible ? 1 : 0,
            duration: 0.2
        })
    }, [isNavVisible])


    return (
        <div ref={navContainerRef} className={`fixed inset-x-0 z-50 top-4 h-16 transition-all duration-500 border-none md:inset-x-6 ${hasFloatingNav ? 'floating-nav' : ''}`}>
            <header className='absolute top-1/2 w-full -translate-y-1/2'>
                <nav className='flex items-center justify-start md:justify-end w-full h-full p-4'>
                    <div className='block w-screen'>
                        {navItems.map((item, index) => (
                            <a key={index} className='nav-hover-btn ms-7 text-xs' href={`#${item.toLocaleLowerCase()}`}>
                                {item}
                            </a>
                        ))}
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Navbar
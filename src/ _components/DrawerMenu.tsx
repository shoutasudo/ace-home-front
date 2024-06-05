'use client'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faMobileScreenButton,
    faEnvelope,
    faComment,
    faCrown
} from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import SnsIconList from './SnsIconList'


const DrawerMenu = () => {
    const [toggle, setToggle] = useState(false)

    const drawerToggle = () => {
        setToggle(prev => !prev)
    }

    return (
        <>
            <div
                className={
                    toggle ? 'openbtn6 relative active' : 'openbtn6 relative'
                }
                onClick={() => drawerToggle()}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <nav
                id="g-nav"
                className={
                    toggle
                        ? 'panelactive flex justify-center w-1/2 md:w-2/6'
                        : ''
                }>
                <div id="g-nav-list w-10/12">
                    <ul className="border-none w-full">
                        <nav>
                            <ul className="w-full">
                                <li className="lg:border-r-2 lg:border-neutral-700 px-5 lg:px-0">
                                    <Link
                                        className="flex justify-center items-center"
                                        href="/about"
                                        onClick={() => drawerToggle()}
                                    >
                                        <FontAwesomeIcon
                                            icon={faHeart}
                                            className="lg:text-fontMainBrown text-mainPink text-2xl w-2/12"
                                        />
                                        <span className="zen-kaku-medium text-sm tracking-widest lg:text-fontMainBrown text-white w-10/12 ml-2">
                                            ACE HOMEとは
                                        </span>
                                    </Link>
                                </li>
                                <li className="lg:border-r-2 lg:border-neutral-700 px-5 lg:px-0">
                                    <Link
                                        className="flex justify-center items-center"
                                        href="staff-list"
                                        onClick={() => drawerToggle()}
                                    >
                                        <FontAwesomeIcon
                                            icon={faCrown}
                                            className="lg:text-fontMainBrown text-mainPink text-2xl rotate-custom w-2/12"
                                        />
                                        <span className="zen-kaku-medium text-sm tracking-widest lg:text-fontMainBrown text-white w-10/12 ml-2">
                                            スタッフ一覧
                                        </span>
                                    </Link>
                                </li>
                                <li className="lg:border-r-2 lg:border-neutral-700 px-5 lg:px-0">
                                    <Link
                                        className="flex justify-center items-center"
                                        href="/sns-list"
                                        onClick={() => drawerToggle()}
                                    >
                                        <FontAwesomeIcon
                                            icon={faMobileScreenButton}
                                            className="lg:text-fontMainBrown text-mainPink text-2xl w-2/12"
                                        />
                                        <span className="zen-kaku-medium text-sm tracking-widest lg:text-fontMainBrown text-white w-10/12 ml-2">
                                            SNS一覧
                                        </span>
                                    </Link>
                                </li>
                                <li className="lg:border-r-2 lg:border-neutral-700 px-5 lg:px-0">
                                    <Link
                                        className="flex justify-center items-center"
                                        href="/company"
                                        onClick={() => drawerToggle()}
                                    >
                                        <FontAwesomeIcon
                                            icon={faComment}
                                            className="lg:text-fontMainBrown text-mainPink text-2xl w-2/12"
                                        />
                                        <span className="zen-kaku-medium text-sm tracking-widest lg:text-fontMainBrown text-white w-10/12 ml-2">
                                            会社概要
                                        </span>
                                    </Link>
                                </li>
                                <li className="px-5 lg:px-0">
                                    <Link
                                        className="flex justify-center items-center"
                                        href="/contact"
                                        onClick={() => drawerToggle()}
                                    >
                                        <FontAwesomeIcon
                                            icon={faEnvelope}
                                            className="lg:text-fontMainBrown text-mainPink text-2xl w-2/12"
                                        />
                                        <span className="zen-kaku-medium text-sm tracking-widest lg:text-fontMainBrown text-white w-10/12 ml-2">
                                            お問合せ
                                        </span>
                                    </Link>
                                </li>
                                <div className='w-full flex justify-center mt-9 px-3'>
                                    <div className="drawer-icons text-mainPink text-md w-56 w-max-md flex justify-center">
                                        <SnsIconList />
                                    </div>
                                </div>
                            </ul>
                        </nav>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default DrawerMenu

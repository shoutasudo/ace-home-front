'use client'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faTicket,
    faMobileScreenButton,
    faEnvelope,
    faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'


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
                                        href="#">
                                        <FontAwesomeIcon
                                            icon={faMobileScreenButton}
                                            className="lg:text-fontMainBrown text-white link-icon-horizontal"
                                        />
                                        <span className="zen-kaku-medium text-sm tracking-widest lg:text-fontMainBrown text-white">
                                            ACE HOMEとは
                                        </span>
                                    </Link>
                                </li>
                                <li className="lg:border-r-2 lg:border-neutral-700 px-5 lg:px-0">
                                    <Link
                                        className="flex justify-center items-center"
                                        href="#">
                                        <FontAwesomeIcon
                                            icon={faTicket}
                                            className="lg:text-fontMainBrown text-white link-icon-horizontal"
                                        />
                                        <span className="zen-kaku-medium text-sm tracking-widest lg:text-fontMainBrown text-white">
                                            特典・クーポン
                                        </span>
                                    </Link>
                                </li>
                                <li className="lg:border-r-2 lg:border-neutral-700 px-5 lg:px-0">
                                    <Link
                                        className="flex justify-center items-center"
                                        href="#">
                                        <FontAwesomeIcon
                                            icon={faHeart}
                                            className="lg:text-fontMainBrown text-white link-icon-horizontal"
                                        />
                                        <span className="zen-kaku-medium text-sm tracking-widest lg:text-fontMainBrown text-white">
                                            ACE女子割
                                        </span>
                                    </Link>
                                </li>
                                <li className="lg:border-r-2 lg:border-neutral-700 px-5 lg:px-0">
                                    <Link
                                        className="flex justify-center items-center"
                                        href="#">
                                        <FontAwesomeIcon
                                            icon={faMobileScreenButton}
                                            className="lg:text-fontMainBrown text-white link-icon-horizontal"
                                        />
                                        <span className="zen-kaku-medium text-sm tracking-widest lg:text-fontMainBrown text-white">
                                            SNS一覧
                                        </span>
                                    </Link>
                                </li>
                                <li className="lg:border-r-2 lg:border-neutral-700 px-5 lg:px-0">
                                    <Link
                                        className="flex justify-center items-center"
                                        href="#">
                                        <FontAwesomeIcon
                                            icon={faComment}
                                            className="lg:text-fontMainBrown text-white link-icon-horizontal"
                                        />
                                        <span className="zen-kaku-medium text-sm tracking-widest lg:text-fontMainBrown text-white">
                                            よくある質問
                                        </span>
                                    </Link>
                                </li>
                                <li className="px-5 lg:px-0">
                                    <Link
                                        className="flex justify-center items-center"
                                        href="#
                                        ">
                                        <FontAwesomeIcon
                                            icon={faEnvelope}
                                            className="lg:text-fontMainBrown text-white link-icon-horizontal"
                                        />
                                        <span className="zen-kaku-medium text-sm tracking-widest lg:text-fontMainBrown text-white">
                                            お問合せ
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default DrawerMenu

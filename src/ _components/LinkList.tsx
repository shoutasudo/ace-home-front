import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faTicket,
    faMobileScreenButton,
    faEnvelope,
    faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

const LinkList = () => {
    return (
        <nav>
            <ul className="w-full">
                <li className="lg:border-r-2 lg:border-neutral-700 px-5 lg:px-0">
                    <Link className="flex justify-center items-center" href="/about">
                        <FontAwesomeIcon
                            icon={faMobileScreenButton}
                            className="text-fontMainBrown link-icon-horizontal"
                        />
                        <span className="zen-kaku-bold text-sm tracking-widest text-fontMainBrown hover:text-white transition-all duration-500 ease-out">
                            ACE HOMEとは
                        </span>
                    </Link>
                </li>
                <li className="lg:border-r-2 lg:border-neutral-700 px-5 lg:px-0">
                    <Link className="flex justify-center items-center" href="/staff-list">
                        <FontAwesomeIcon
                            icon={faTicket}
                            className="text-fontMainBrown link-icon-horizontal"
                        />
                        <span className="zen-kaku-bold text-sm tracking-widest text-fontMainBrown hover:text-white transition-all duration-500 ease-out">
                            スタッフ一覧
                        </span>
                    </Link>
                </li>
                <li className="lg:border-r-2 lg:border-neutral-700 px-5 lg:px-0">
                    <Link className="flex justify-center items-center" href="/sns-list">
                        <FontAwesomeIcon
                            icon={faHeart}
                            className="text-fontMainBrown link-icon-horizontal"
                        />
                        <span className="zen-kaku-bold text-sm tracking-widest text-fontMainBrown hover:text-white transition-all duration-500 ease-out">
                            SNS一覧
                        </span>
                    </Link>
                </li>
                {/* <li className="lg:border-r-2 lg:border-neutral-700 px-5 lg:px-0">
                    <Link className="flex justify-center items-center" href="/privacy-policy">
                        <FontAwesomeIcon
                            icon={faMobileScreenButton}
                            className="lg:text-fontMainBrown text-white link-icon-horizontal"
                        />
                        <span className="zen-kaku-medium text-sm tracking-widest lg:text-fontMainBrown text-white">
                            プライバシーポリシー
                        </span>
                    </Link>
                </li> */}
                <li className="lg:border-r-2 lg:border-neutral-700 px-5 lg:px-0">
                    <Link className="flex justify-center items-center" href="/company">
                        <FontAwesomeIcon
                            icon={faComment}
                            className="lg:text-fontMainBrown text-white link-icon-horizontal"
                        />
                        <span className="zen-kaku-bold text-sm tracking-widest text-fontMainBrown hover:text-white transition-all duration-500 ease-out">
                            会社概要
                        </span>
                    </Link>
                </li>
                <li className="px-5 lg:px-0">
                    <Link className="flex justify-center items-center" href="/contact">
                        <FontAwesomeIcon
                            icon={faEnvelope}
                            className="lg:text-fontMainBrown text-white link-icon-horizontal"
                        />
                        <span className="zen-kaku-bold text-sm tracking-widest text-fontMainBrown hover:text-white transition-all duration-500 ease-out">
                            お問合せ
                        </span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default LinkList

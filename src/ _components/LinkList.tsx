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
                    <Link className="flex justify-center items-center" href="#">
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
                    <Link className="flex justify-center items-center" href="#">
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
                    <Link className="flex justify-center items-center" href="#">
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
                    <Link className="flex justify-center items-center" href="#">
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
                    <Link className="flex justify-center items-center" href="#">
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
                    <Link className="flex justify-center items-center" href="#">
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
    )
}

export default LinkList
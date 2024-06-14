import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faLine,
    faInstagram,
    faXTwitter,
    faSquareYoutube,
    faFacebook,
    faTiktok,
} from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'

const SnsIconList = () => {
    return (
        <div className="flex justify-around items-end w-full">
            <Link href="https://lin.ee/TwXHWov" target="_blank">
                <FontAwesomeIcon
                    icon={faLine}
                    className="w-full cursor-pointer sns-icon"
                />
            </Link>
            <div className="">
                <Link href="https://www.instagram.com/ace_home_kobe/" target='_blank'>
                    <FontAwesomeIcon
                        icon={faInstagram}
                        className="w-full cursor-pointer sns-icon"
                    />
                </Link>
            </div>
            <div className="">
                <Link href="https://x.com/ace_home4367" target='_blank'>
                    <FontAwesomeIcon
                        icon={faXTwitter}
                        className="w-full cursor-pointer sns-icon"
                    />
                </Link>
            </div>
            {/* <div className="">
                <FontAwesomeIcon
                    icon={faSquareYoutube}
                    className="w-full cursor-pointer sns-icon"
                />
            </div> */}
            {/* <div className="">
                <FontAwesomeIcon
                    icon={faFacebook}
                    className="w-full cursor-pointer sns-icon"
                />
            </div> */}
            <div className="">
                <Link href="https://www.tiktok.com/@ace_home_kobe" target='_blank'>
                    <FontAwesomeIcon
                        icon={faTiktok}
                        className="w-full cursor-pointer sns-icon"
                    />
                </Link>
            </div>
        </div>
    )
}

export default SnsIconList

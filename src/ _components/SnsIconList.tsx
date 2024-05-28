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
            <Link href="#" className="">
                <FontAwesomeIcon
                    icon={faLine}
                    className="w-full cursor-pointer sns-icon"
                />
            </Link>
            <div className="">
                <FontAwesomeIcon
                    icon={faInstagram}
                    className="w-full cursor-pointer sns-icon"
                />
            </div>
            <div className="">
                <FontAwesomeIcon
                    icon={faXTwitter}
                    className="w-full cursor-pointer sns-icon"
                />
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
                <FontAwesomeIcon
                    icon={faTiktok}
                    className="w-full cursor-pointer sns-icon"
                />
            </div>
        </div>
    )
}

export default SnsIconList

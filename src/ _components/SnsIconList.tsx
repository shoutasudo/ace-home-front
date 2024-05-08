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

const SnsIconList = () => {
    return (
        <div className="flex justify-around items-center w-full">
            <div className="">
                <FontAwesomeIcon
                    icon={faLine}
                    className="w-full cursor-pointer sns-icon"
                />
            </div>
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
            <div className="">
                <FontAwesomeIcon
                    icon={faSquareYoutube}
                    className="w-full cursor-pointer sns-icon"
                />
            </div>
            <div className="">
                <FontAwesomeIcon
                    icon={faFacebook}
                    className="w-full cursor-pointer sns-icon"
                />
            </div>
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

'use client'

import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

const TopScrollBanner = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)
        return () => {
            window.addEventListener('scroll', toggleVisibility)
        }
    })

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <div
            className="bg-mainGray w-full flex justify-center flex-col items-center py-2 cursor-pointer"
            onClick={() => isVisible && scrollToTop()}>
            <div className="flex justify-center items-center">
                <div className="top-scroll-icon">
                    <FontAwesomeIcon icon={faArrowUp} className="text-lg" />
                </div>
                <div className="top-scroll-text ml-3">
                    <span className="text-xl tracking-wide zen-kaku-medium">
                        PAGETOP
                    </span>
                </div>
            </div>
        </div>
    )
}

export default TopScrollBanner

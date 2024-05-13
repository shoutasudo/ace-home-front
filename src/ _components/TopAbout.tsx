'use client'
import React from 'react'
import DoubleLineBtn from './DoubleLineBtn'

const TopAbout = () => {
    return (
        <>
            <div className="top-about w-full flex justify-center">
                <div className="max-w-5xl">
                    <p className="lg:px-10 md:px-8 px-2 text-center font-sans font-bold lg:text-sm md:text-sm text-xs">
                        メゾンエイブルは、お部屋探しのエイブルが運営する、
                        <br />
                        ひとり暮らし女性を応援するための生活サポートサービスです。
                        <br />
                        国内のひとり暮らしをしている方なら誰でもご利用いただけます。
                    </p>
                </div>
            </div>
            <div className="top-about-btn pt-8">
                <DoubleLineBtn content={'ご利用はこちら'} link={'#'} />
            </div>
        </>
    )
}

export default TopAbout

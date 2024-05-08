'use client'
import React from 'react'
import DoubleLineBtn from './DoubleLineBtn'

const TopAbout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <div className="w-full flex justify-center">
                <div className="max-w-5xl">
                    <p className="lg:px-10 md:px-8 px-2 text-center noto-sans-jp font-medium lg:text-xl md:text-lg text-xs leading-5 tracking-normal">
                        {children}
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

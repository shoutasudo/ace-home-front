import React from 'react'
import SnsIconList from './SnsIconList'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return (
        <>
            <div className="flex justify-center items-center flex-col w-full py-10">
                <div className="footer-sns-icons text-mainPink w-full max-w-sm text-lg px-14">
                    <SnsIconList />
                </div>
                <div className="footer-log mt-4">
                    <Image
                        src="/icons/banner-horizontal.png"
                        width={289}
                        height={50}
                        alt="footer-log"
                    />
                </div>
            </div>
            <div className="footer-link-list w-full border-t-2 border-mainGray px-2 py-4">
                <div className="flex justify-center items-center">
                    <div className="grid grid-cols-1 gap-3 max-w-xl">
                        <div className="privacy-policy-link text-xs text-center noto-sans-jp text-fontMainBrown px-2">
                            <Link href='/privacy-policy'>プライバシーポリシー</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer

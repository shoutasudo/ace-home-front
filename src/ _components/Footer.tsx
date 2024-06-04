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
                <div className="footer-description mt-6">
                    <h3 className="text-xs text-center tracking-wider leading-5">
                        MAISON ABLEは、
                        <br />
                        ひとり暮らし女性を応援する
                        <br />
                        エイブルが運営しています。
                    </h3>
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
                    <div className="grid grid-cols-3 gap-3 max-w-xl">
                        <div className="privacy-policy-link text-xs text-center noto-sans-jp text-fontMainBrown border-r border-fontMainBrown px-2">
                            <Link href={'#'}>プライバシーポリシー</Link>
                        </div>
                        <div className="social-media-link text-xs text-center noto-sans-jp text-fontMainBrown border-r border-fontMainBrown px-2">
                            <Link href={'#'}>ソーシャルメディアポリシー</Link>
                        </div>
                        <div className="about-link text-xs text-center noto-sans-jp text-fontMainBrown border-fontMainBrown px-2">
                            <Link href={'#'}>testtesttesttest</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer

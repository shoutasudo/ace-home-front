import React from 'react'
import Image from 'next/image'
import SnsIconList from '@/ _components/SnsIconList'
import LinkList from '@/ _components/LinkList'
import DrawerMenu from '@/ _components/DrawerMenu'
import Link from 'next/link'

const Header = () => {
    return (
        <>
            <header className="pc-header w-full pt-5 lg:block hidden bg-mainPink">
                <div className="flex justify-center items-center px-5">
                    <div className="w-full max-w-5xl">
                        {/* header上部 */}
                        <section className="header-top w-full flex justify-between items-end">
                            <div className="log w-full">
                                <Link href="/">
                                    <div className="header-log-pc cursor-pointer pb-1">
                                        <Image
                                            src="/icons/banner-horizontal-white.png"
                                            alt="Example"
                                            width={289}
                                            height={50}
                                        />
                                    </div>
                                </Link>
                            </div>
                            <div className="header-pc-sns-icons w-1/2 text-white px-12 text-lg">
                                <SnsIconList />
                            </div>
                        </section>

                        {/* header下部 */}
                        <section className="header-bottom w-full py-4">
                            <LinkList />
                        </section>
                    </div>
                </div>
            </header>
            <header className="sp-header w-full h-full lg:hidden block bg-mainPink">
                <div className="flex justify-center w-full">
                    <div className="header-log-sp py-2 flex justify-center items-center w-full h-full sm:pl-16 px-2">
                        <Link href="/">
                            <Image
                                src="/icons/banner-horizontal-white.png"
                                alt="Example"
                                className=""
                                width={200}
                                height={50}
                                layout="fixed"
                            />
                        </Link>
                    </div>
                    <DrawerMenu />
                </div>
            </header >
        </>
    )
}

export default Header

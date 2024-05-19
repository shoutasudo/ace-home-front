import React from 'react'
import Image from 'next/image'
import SnsIconList from '@/ _components/SnsIconList'
import LinkList from '@/ _components/LinkList'
import DrawerMenu from '@/ _components/DrawerMenu'
import bannerDemoImage from '../../public/images/560x50.png'
import bannerDemoImageSp from '../../public/images/40x40.png'
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
                                    <div className="header-log-pc cursor-pointer">
                                        <Image
                                            src={bannerDemoImage}
                                            alt="Example"
                                        />
                                    </div>
                                </Link>
                            </div>
                            <div className="header-pc-sns-icons w-1/2 text-white">
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
                    <div className="header-log-sp py-1 flex justify-center items-center w-full h-full pl-16">
                        <Link href="/">
                            <Image
                                src="/icons/logo-white.png"
                                alt="Example"
                                className=""
                                width={45}
                                height={45}
                                layout="fixed"
                            />
                        </Link>
                    </div>
                    <div>
                        <DrawerMenu />
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header

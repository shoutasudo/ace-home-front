import Contents from '@/ _components/Contents'
import MemberRegister from '@/ _components/MemberRegister'
import Image from 'next/image'
import React from 'react'

const AboutPage = () => {
    return (
        <div className="flex justify-center w-full flex-col mt-5">
            <div className="w-full flex justify-center">
                <div className="about-top-icon-image w-2/3 flex justify-center">
                    <Image src="/icons/top-logo-white.png" width={141} height={20} alt="logo" />
                </div>
            </div>
            <div className='about-main-title w-full flex justify-center mt-4'>
                <div className='border-t-2 border-b-2 border-mainPink w-3/4 md:w-2/6 py-2'>
                    <div className='flex justify-center w-full'>
                        <h1 className='zen-kaku-bold text-md tracking-widest text-fontMainBrown'>ACE HOMEとは?</h1>
                    </div>
                </div>
            </div>
            <div className='about-description w-full flex justify-center mt-10'>
                <p className='text-left md:text-center zen-kaku-light text-xs md:text-sm tracking-widest leading-5 md:leading-6'>
                    ACE HOMEは、兵庫県神戸市で女性が運営する、
                    <br />
                    女性為の、女性による不動産屋さんです。
                    <br />
                    一人暮らしの女性が、<br />安心してお部屋を探せるように専属スタッフがサポートします。
                </p>
            </div>

            <div className='flex justify-center mt-8'>
                <div className=''>
                    <div className='flex justify-center w-full'>
                        <div className='md:w-10/12 w-full'>
                            <p className='zen-kaku-bold text-fontMainBrown md:text-md text-sm'>
                                <span className='text-mainPink'>Q. </span>
                                女性の為ってどーゆー事？</p>
                        </div>
                    </div>
                    <div className='flex justify-center mt-2'>
                        <div className='flex justify-center items-start md:w-10/12 w-full'>
                            <div className="balloon-l md:w-9/12 w-full">
                                <p className='zen-kaku-bold md:text-md text-sm'>
                                    まず当社は、女性が一人様でもご来店しやすいようにスタッフは<br />
                                    <span className='text-mainPink'>全員女性スタッフ</span>になります。<br />
                                    そこから更に、当社の女性スタッフ<span className='text-mainPink'>「女性の一人暮らし」</span>に<br />
                                    うってつけの物件をご紹介させていただきます！<br />
                                </p>
                            </div>
                            <div className='md:w-3/12 md:mt-8 hidden md:flex md:justify-center'>
                                <Image
                                    src="/character/red-1518-1.png"
                                    width={600}
                                    height={950}
                                    alt='red-1357'
                                    className='w-2/3'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-center mt-8'>
                <div className=''>
                    <div className='flex justify-center w-full'>
                        <div className='md:w-10/12 w-full'>
                            <p className='zen-kaku-bold text-fontMainBrown md:text-md text-sm'>
                                <span className='text-mainPink'>Q. </span>
                                女性の為ってどーゆー事？</p>
                        </div>
                    </div>
                    <div className='flex justify-center mt-2'>
                        <div className='flex justify-center items-start md:w-10/12 w-full'>
                            <div className='md:w-3/12 md:mt-8 hidden md:flex md:justify-center'>
                                <Image
                                    src="/character/red-1357-1.png"
                                    width={600}
                                    height={950}
                                    alt='red-1357'
                                    className='w-2/3'
                                />
                            </div>
                            <div className="balloon-r md:w-9/12 w-full">
                                <p className='zen-kaku-bold md:text-md text-sm'>
                                    まず当社は、女性が一人様でもご来店しやすいようにスタッフは<br />
                                    <span className='text-mainPink'>全員女性スタッフ</span>になります。<br />
                                    そこから更に、当社の女性スタッフ<span className='text-mainPink'>「女性の一人暮らし」</span>に<br />
                                    うってつけの物件をご紹介させていただきます！<br />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-center mt-8'>
                <div className=''>
                    <div className='flex justify-center w-full'>
                        <div className='md:w-10/12 w-full'>
                            <p className='zen-kaku-bold text-fontMainBrown md:text-md text-sm'>
                                <span className='text-mainPink'>Q. </span>
                                女性の為ってどーゆー事？</p>
                        </div>
                    </div>
                    <div className='flex justify-center mt-2'>
                        <div className='flex justify-center items-start md:w-10/12 w-full'>
                            <div className="balloon-l md:w-9/12 w-full">
                                <p className='zen-kaku-bold md:text-md text-sm'>
                                    まず当社は、女性が一人様でもご来店しやすいようにスタッフは<br />
                                    <span className='text-mainPink'>全員女性スタッフ</span>になります。<br />
                                    そこから更に、当社の女性スタッフ<span className='text-mainPink'>「女性の一人暮らし」</span>に<br />
                                    うってつけの物件をご紹介させていただきます！<br />
                                </p>
                            </div>
                            <div className='md:w-3/12 md:mt-8 hidden md:flex md:justify-center'>
                                <Image
                                    src="/character/red-1526-1.png"
                                    width={600}
                                    height={950}
                                    alt='red-1357'
                                    className='w-2/3'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className='about-topic-title mt-8 w-full text-center'>
                <span className='text-mainPink zen-kaku-bold tracking-widest text-lg inline-block'>3つのメリット</span>
            </div>
            <div className='about-topic-icons flex flex-row flex-wrap md:flex-nowrap justify-center text-center mt-5'>
                <div className='about-topic-icon-free w-1/2 lg:w-1/3 flex justify-center flex-col'>
                    <Image src="/icons/img_free.png" width={254} height={254} alt='free' />
                    <p className='-mt-6 text-xs zen-kaku-bold text-center'>ずっと無料！</p>
                </div>
                <div className='about-topic-icon-free w-1/2 lg:w-1/3 flex justify-center flex-col'>
                    <Image src="/icons/img_benefits.png" width={254} height={254} alt='free' />
                    <p className='-mt-6 text-xs zen-kaku-bold'>特典充実！</p>
                </div>
                <div className='about-topic-icon-free w-1/2 lg:w-1/3 flex justify-center flex-col'>
                    <Image src="/icons/img_coupon.png" width={254} height={254} alt='free' />
                    <p className='-mt-6 text-xs zen-kaku-bold'>クーポンぞくぞく！</p>
                </div>
            </div> */}
            <div className='about-topic-content mt-8'>
                <p className='text-xs text-mainPink text-left sm:text-center zen-kaku-bold tracking-widest leading-5'>
                    ついに始まるひとり暮らし！<br />
                    楽しみだったり、ワクワクする一方で。<br />
                    女性のひとり暮らしは、大変なことも多いから。<br />
                    どうか、一人でがんばりすぎないで。<br />
                    <br />
                    <br />
                    メゾンエイブル は、ひとり暮らし女性を応援する生活サポート。<br />
                    生活に役立つおトクから、おしゃれやキレイを楽しむサービス、<br />
                    これからのキャリアのヒントまでお届けします。<br />
                    <br />
                    <br />
                    自分の力で暮らしていく。<br />
                    その経験はいつか、あなたをつよくしてくれるから。<br />
                    それまで、頼れるところは、頼っていこう！<b></b>
                </p>
            </div>
            <div className='about-topic-img mt-10 flex justify-center'>
                <Image src="/icons/banner-horizontal.png" width={420} height={60} alt='topic-footer' />
            </div>
        </div>
    )
}

export default AboutPage
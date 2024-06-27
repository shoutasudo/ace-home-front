import Contents from '@/ _components/Contents'
import MemberRegister from '@/ _components/MemberRegister'
import { Metadata } from 'next'
import Image from 'next/image'
import React from 'react'

export const metadata: Metadata = {
    title: 'ACE HOMEとは？'
}

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
                    ACE HOMEは、兵庫県神戸市で女性が運営する<br />女性スタッフによる不動産・リフォーム屋さんです。<br />
                    一人暮らしの女性、学生さん、ファミリーの方、もちろん男性の方も<br />
                    安心して相談出来るように宅地建物取引士・行政書士・２級管理施工技師<br />
                    などのプロフェッショナルがサポートいたします。
                </p>
            </div>

            <div className='flex justify-center mt-8'>
                <div className=''>
                    <div className='flex justify-center w-full'>
                        <div className='md:w-10/12 w-full'>
                            <p className='zen-kaku-bold text-fontMainBrown md:text-md text-sm'>
                                <span className='text-mainPink'>Q. </span>
                                なぜ、女性スタッフのみで運営しているの？</p>
                        </div>
                    </div>
                    <div className='flex justify-center mt-2'>
                        <div className='flex justify-center items-start md:w-10/12 w-full'>
                            <div className="balloon-l md:w-9/12 w-full">
                                <p className='zen-kaku-bold md:text-md text-sm'>
                                    <span className='text-mainPink'>女性の一人暮らし</span>では不安がいっぱいだと思います。<br />
                                    なので、女性が一人でもご来店・ご相談しやすくする為に<br />
                                    弊社は<span className='text-mainPink'>女性のスタッフのみ</span>で運営しています。<br />
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
                                営業のメールや電話が苦手なのですが・・・</p>
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
                                    弊社では無理な営業は一切いたしませんのでご安心ください。
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
                                リフォームの事は相談できますか？</p>
                        </div>
                    </div>
                    <div className='flex justify-center mt-2'>
                        <div className='flex justify-center items-start md:w-10/12 w-full'>
                            <div className="balloon-l md:w-9/12 w-full">
                                <p className='zen-kaku-bold md:text-md text-sm'>
                                    もちろん可能です。<br />
                                    各ご家庭のニーズに合わせて<span className='text-mainPink'>女性目線ならでは</span>のご提案をいたします！
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

            <div className='flex justify-center mt-8'>
                <div className=''>
                    <div className='flex justify-center w-full'>
                        <div className='md:w-10/12 w-full'>
                            <p className='zen-kaku-bold text-fontMainBrown md:text-md text-sm'>
                                <span className='text-mainPink'>Q. </span>
                                家の購入を検討しているのですが・・・</p>
                        </div>
                    </div>
                    <div className='flex justify-center mt-2'>
                        <div className='flex justify-center items-start md:w-10/12 w-full'>
                            <div className='md:w-3/12 md:mt-8 hidden md:flex md:justify-center'>
                                <Image
                                    src="/character/red-1806-1.png"
                                    width={600}
                                    height={950}
                                    alt='red-1357'
                                    className='w-2/3'
                                />
                            </div>
                            <div className="balloon-r md:w-9/12 w-full">
                                <p className='zen-kaku-bold md:text-md text-sm'>
                                    お任せください！<br />
                                    弊社では、住宅ローンの資金計画からライフプラン、賃貸・売買の比較など
                                    しっかりとしたヒアリング時間を設け、<span className='text-mainPink'>お客様の最適</span>をご提案いたします。
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
                                家を相続することになったのですが・・・</p>
                        </div>
                    </div>
                    <div className='flex justify-center mt-2'>
                        <div className='flex justify-center items-start md:w-10/12 w-full'>
                            <div className="balloon-l md:w-9/12 w-full">
                                <p className='zen-kaku-bold md:text-md text-sm'>
                                    もちろんご相談可能です！<br />
                                    残置物撤去や、ご売却など、<span className='text-mainPink'>ご家庭にあわせたご相談</span>が可能となっております！
                                </p>
                            </div>
                            <div className='md:w-3/12 md:mt-8 hidden md:flex md:justify-center'>
                                <Image
                                    src="/character/red-1807-1.png"
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
                                近頃光熱費がかなりあがってきているのですが、節約する方法はありますか？</p>
                        </div>
                    </div>
                    <div className='flex justify-center mt-2'>
                        <div className='flex justify-center items-start md:w-10/12 w-full'>
                            <div className='md:w-3/12 md:mt-8 hidden md:flex md:justify-center'>
                                <Image
                                    src="/character/red-1809-1.png"
                                    width={600}
                                    height={950}
                                    alt='red-1357'
                                    className='w-2/3'
                                />
                            </div>
                            <div className="balloon-r md:w-9/12 w-full">
                                <p className='zen-kaku-bold md:text-md text-sm'>
                                    弊社では、戸建て住宅の方に、太陽光発電システムや蓄電池などのご提案も<br />
                                    可能となっておりますので、<span className='text-mainPink'>お家の事でお困りのことはなんでもご相談ください！</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='about-topic-img mt-10 flex justify-center'>
                <Image src="/icons/banner-horizontal.png" width={420} height={60} alt='topic-footer' />
            </div>
        </div>
    )
}

export default AboutPage
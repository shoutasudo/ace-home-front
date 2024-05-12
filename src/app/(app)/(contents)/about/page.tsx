import Contents from '@/ _components/Contents'
import MemberRegister from '@/ _components/MemberRegister'
import Image from 'next/image'
import React from 'react'

const AboutPage = () => {
    return (
        <div className="flex justify-center w-full flex-col mt-5">
            <div className="w-full flex justify-center">
                <div className="about-top-icon-image w-1/2 flex justify-center">
                    <Image src="/images/193x146.png" width={193} height={146} alt="logo" />
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
                    ACE HOMEは、<br />ひとり暮らしの女性を応援するために、エイブルが立ち上げた生活サポートサービスです。<br />
                    志を同じくする様々な企業と力を合わせて、ひとり暮らし女性の毎日をサポートします。
                </p>
            </div>
            <div className='about-topic-title mt-8 w-full text-center'>
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
            </div>
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
                <Image src="/images/293x48.png" width={298} height={48} alt='topic-footer' />
            </div>
        </div>
    )
}

export default AboutPage
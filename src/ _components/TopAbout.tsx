'use client'
import React from 'react'
import DoubleLineBtn from './DoubleLineBtn'

const TopAbout = () => {
    return (
        <>
            <div className="top-about w-full flex justify-center">
                <div className="max-w-5xl">
                    <p className="lg:px-10 md:px-8 px-2 text-center font-sans font-bold lg:text-sm md:text-sm text-xs">
                        ACE HOMEは、兵庫県神戸市で女性が運営する<br />女性スタッフによる不動産・リフォーム屋さんです。<br />
                        一人暮らしの女性、学生さん、ファミリーの方、もちろん男性の方も<br />
                        安心して相談出来るように宅地建物取引士・行政書士・２級管理施工技師<br />
                        などのプロフェッショナルがサポートいたします。
                    </p>
                </div>
            </div>
            <div className="top-about-btn pt-8">
                <DoubleLineBtn content={'more'} link={'/about'} />
            </div>
        </>
    )
}

export default TopAbout

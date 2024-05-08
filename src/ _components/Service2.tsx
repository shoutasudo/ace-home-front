import React from 'react'
import Image from 'next/image'
import DoubleLineBtn from './DoubleLineBtn'

const Service2 = () => {
    return (
        <div className="flex justify-center items-center flex-col">
            <div className="service-2-container flex justify-center flex-col w-full max-w-4xl">
                <div className="service-2-container-card w-full flex justify-center items-center flex-col border border-mainPink border-t-8 py-10 px-10">
                    <div className="service-2-container-card-title-image w-full flex justify-center items-center flex-col">
                        <Image
                            src="/images/495x123.png"
                            width={495}
                            height={123}
                            alt="service-2-image"
                        />
                    </div>
                    <div className="service-2-container-card-sub-title w-full flex justify-center items-center flex-col mt-5 text-center font-bold tracking-widest">
                        <p className="text-md">エイブル直営店で契約された</p>
                        <p className="text-lg">
                            「ひとり暮らし女性」の
                            <br />
                            仲介手数料を割引！
                        </p>
                    </div>
                    <div className="service-2-container-card-description flex justify-center items-center flex-col mt-6 md:text-center leading-6">
                        <p className="font-normal md:text-sm text-xs leading-6 md:tracking-widest tracking-tight">
                            ※「エイブル女子割」はエイブルで契約される方のみの特典です。
                            <br />
                            メゾンエイブルクラブの特典は、国内でひとり暮らしを
                            <br />
                            している方であれば、どなたでもご利用いただけます。
                        </p>
                    </div>
                    <div className="service-2-container-more-btn mt-6">
                        <DoubleLineBtn content={'more'} link={'#'} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service2

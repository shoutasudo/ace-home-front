import React from 'react'
import Image from 'next/image'
import DoubleLineBtn from './DoubleLineBtn'

const Service2 = () => {
    return (
        <div className="flex justify-center items-center flex-col">
            <div className="service-2-container flex justify-center flex-col w-full max-w-4xl">
                <div className="service-2-container-card w-full flex justify-center items-center flex-col border border-mainPink border-t-8 py-10 sm:px-10 px-2">
                    <div className="service-2-container-card-title-image w-full flex justify-center items-center flex-col">
                        <Image
                            src="/icons/contact.png"
                            width={495}
                            height={123}
                            alt="service-2-image"
                        />
                    </div>
                    <div className="service-2-container-card-sub-title w-full flex justify-center items-center flex-col mt-5 text-center font-bold tracking-widest">
                        <p className="text-md">まずお気軽に</p>
                        <p className="text-lg">
                            ふとした時で大丈夫！
                            <br />
                            まずは、当社にご連絡ください！
                        </p>
                    </div>
                    <div className="service-2-container-card-description flex justify-center items-center flex-col mt-6 md:text-center leading-6">
                        <p className="font-normal md:text-sm text-xs leading-6 md:tracking-widest tracking-tight text-center">
                            希望条件がたくさんある・・・
                            <br />
                            なんとなく「一人暮らしがした」・・・
                            <br />
                            そんな『こだわり』や『なんとなく』から
                            <br />
                            希望のお部屋をお探ししますっ！
                        </p>
                    </div>
                    <div className="service-2-container-more-btn mt-6">
                        <DoubleLineBtn content={'contact'} link={'/contact'} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service2

import React from 'react'
import Image from 'next/image'
import DoubleLineBtn from './DoubleLineBtn'

const Service = () => {
    return (
        <div className="flex justify-center">
            <div>
                <div className="service-top-image w-full flex justify-center">
                    <Image
                        src="/images/466x85.png"
                        alt="banner"
                        width={466}
                        height={85}
                    />
                </div>

                <div className="service-description mt-8 grid grid-cols-1">
                    <h2 className="noto-sans-jp mx-20 font-semibold md:text-2xl text-md text-center tracking-widest leading-8">
                        美容やファッションなど、
                    </h2>
                    <h2 className="noto-sans-jp font-semibold md:text-2xl text-md text-center tracking-widest leading-8">
                        女性にうれしいサービスがおトクに！
                    </h2>
                </div>

                <div className="service-container w-full max-w-4xl flex justify-center md:mt-10 mt-5 px-2 md:px-0">
                    <div className="w-full grid lg:grid-cols-3 lg:gap-0 md:grid-cols-2 md:gap-0 grid-cols-2 gap-3">
                        <div className="service-container-card w-full flex justify-center mt-3 mb-8">
                            <div className="flex justify-center flex-col md:w-11/12 w-full">
                                <div className="card-top-banner bg-mainPink py-1 text-center">
                                    <h1 className="card-top-banner-title text-white md:text-xl text-md noto-sans-jp font-bold">
                                        TESTTEST
                                    </h1>
                                </div>
                                <div className="card-image">
                                    <Image
                                        src="/images/518x350.png"
                                        width={518}
                                        height={350}
                                        alt="cart"
                                    />
                                </div>
                                <div className="card-sub-title text-center md:text-md text-xs md:py-2 py-3 noto-sans-jp ">
                                    <p>お部屋をオトクに探すなら</p>
                                </div>
                                <div className="card-footer bg-mainPink  p-4 text-white text-center noto-sans-jp py-1">
                                    <p className="font-semibold md:text-md text-xs">
                                        仲介手数料
                                    </p>
                                    <p className="font-semibold md:text-xl text-lg">
                                        10%OFF
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="service-container-card w-full flex justify-center mt-3 mb-8">
                            <div className="flex justify-center flex-col md:w-11/12 w-full">
                                <div className="card-top-banner bg-mainPink py-1 text-center">
                                    <h1 className="card-top-banner-title text-white md:text-xl text-md noto-sans-jp font-bold">
                                        TESTTEST
                                    </h1>
                                </div>
                                <div className="card-image">
                                    <Image
                                        src="/images/518x350.png"
                                        width={518}
                                        height={350}
                                        alt="cart"
                                    />
                                </div>
                                <div className="card-sub-title text-center md:text-md text-xs md:py-2 py-3 noto-sans-jp ">
                                    <p>お部屋をオトクに探すなら</p>
                                </div>
                                <div className="card-footer bg-mainPink  p-4 text-white text-center noto-sans-jp py-1">
                                    <p className="font-semibold md:text-md text-xs">
                                        仲介手数料
                                    </p>
                                    <p className="font-semibold md:text-xl text-lg">
                                        10%OFF
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="service-container-card w-full flex justify-center mt-3 mb-8">
                            <div className="flex justify-center flex-col md:w-11/12 w-full">
                                <div className="card-top-banner bg-mainPink py-1 text-center">
                                    <h1 className="card-top-banner-title text-white md:text-xl text-md noto-sans-jp font-bold">
                                        TESTTEST
                                    </h1>
                                </div>
                                <div className="card-image">
                                    <Image
                                        src="/images/518x350.png"
                                        width={518}
                                        height={350}
                                        alt="cart"
                                    />
                                </div>
                                <div className="card-sub-title text-center md:text-md text-xs md:py-2 py-3 noto-sans-jp ">
                                    <p>お部屋をオトクに探すなら</p>
                                </div>
                                <div className="card-footer bg-mainPink  p-4 text-white text-center noto-sans-jp py-1">
                                    <p className="font-semibold md:text-md text-xs">
                                        仲介手数料
                                    </p>
                                    <p className="font-semibold md:text-xl text-lg">
                                        10%OFF
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="service-container-card w-full flex justify-center mt-3 mb-8">
                            <div className="flex justify-center flex-col md:w-11/12 w-full">
                                <div className="card-top-banner bg-mainPink py-1 text-center">
                                    <h1 className="card-top-banner-title text-white md:text-xl text-md noto-sans-jp font-bold">
                                        TESTTEST
                                    </h1>
                                </div>
                                <div className="card-image">
                                    <Image
                                        src="/images/518x350.png"
                                        width={518}
                                        height={350}
                                        alt="cart"
                                    />
                                </div>
                                <div className="card-sub-title text-center md:text-md text-xs md:py-2 py-3 noto-sans-jp ">
                                    <p>お部屋をオトクに探すなら</p>
                                </div>
                                <div className="card-footer bg-mainPink  p-4 text-white text-center noto-sans-jp py-1">
                                    <p className="font-semibold md:text-md text-xs">
                                        仲介手数料
                                    </p>
                                    <p className="font-semibold md:text-xl text-lg">
                                        10%OFF
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="service-container-card w-full flex justify-center mt-3 mb-8">
                            <div className="flex justify-center flex-col md:w-11/12 w-full">
                                <div className="card-top-banner bg-mainPink py-1 text-center">
                                    <h1 className="card-top-banner-title text-white md:text-xl text-md noto-sans-jp font-bold">
                                        TESTTEST
                                    </h1>
                                </div>
                                <div className="card-image">
                                    <Image
                                        src="/images/518x350.png"
                                        width={518}
                                        height={350}
                                        alt="cart"
                                    />
                                </div>
                                <div className="card-sub-title text-center md:text-md text-xs md:py-2 py-3 noto-sans-jp ">
                                    <p>お部屋をオトクに探すなら</p>
                                </div>
                                <div className="card-footer bg-mainPink  p-4 text-white text-center noto-sans-jp py-1">
                                    <p className="font-semibold md:text-md text-xs">
                                        仲介手数料
                                    </p>
                                    <p className="font-semibold md:text-xl text-lg">
                                        10%OFF
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="service-container-card w-full flex justify-center mt-3 mb-8">
                            <div className="flex justify-center flex-col md:w-11/12 w-full">
                                <div className="card-top-banner bg-mainPink py-1 text-center">
                                    <h1 className="card-top-banner-title text-white md:text-xl text-md noto-sans-jp font-bold">
                                        TESTTEST
                                    </h1>
                                </div>
                                <div className="card-image">
                                    <Image
                                        src="/images/518x350.png"
                                        width={518}
                                        height={350}
                                        alt="cart"
                                    />
                                </div>
                                <div className="card-sub-title text-center md:text-md text-xs md:py-2 py-3 noto-sans-jp ">
                                    <p>お部屋をオトクに探すなら</p>
                                </div>
                                <div className="card-footer bg-mainPink  p-4 text-white text-center noto-sans-jp py-1">
                                    <p className="font-semibold md:text-md text-xs">
                                        仲介手数料
                                    </p>
                                    <p className="font-semibold md:text-xl text-lg">
                                        10%OFF
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="service-more-btn">
                    <DoubleLineBtn content={'more'} link={'#'} />
                </div>
            </div>
        </div>
    )
}

export default Service

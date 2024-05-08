import React from 'react'
import Link from 'next/link'
import DoubleLineBtn from './DoubleLineBtn'

const Information = () => {
    return (
        <div className="information-container w-full flex justify-center items-center flex-col bg-informationBg py-6 px-5">
            <div className="w-full max-w-4xl">
                <div className="information-container-title flex justify-center items-center mb-5">
                    <h2 className="noto-sans-jp font-medium text-xl tracking-normal">
                        information
                    </h2>
                </div>
                <div className="information-container-content w-full border-b-mainPink border-b pb-5 mt-5">
                    <div className="information-container-content-tag text-left w-full mb-3">
                        <div className="bg-mainPink px-3 text-center w-14">
                            <p className="text-white noto-sans-jp font-medium text-sm">
                                特集
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start w-full">
                        <div className="information-container-content-date w-3/12 md:w-2/12 lg:w-1/12">
                            <p className="text-informationText zen-kaku-bold tracking-wide text-sm">
                                2024.12.30
                            </p>
                        </div>
                        <div className="information-container-content-sub-title w-9/12 md:w-10/12 lg:w-11/12 lg:pl-5">
                            <Link
                                href={'#'}
                                className="text-informationText noto-sans-jp font-medium tracking-wider text-sm md:text-md">
                                「EVERNAIL」からメゾンエイブルクラブ会員が使える特典をリリースいたしました。
                            </Link>
                        </div>
                        {/* <div className="information-container-content-icon w-1/12">
                                            <FontAwesomeIcon icon={faChevronRight} />
                                        </div> */}
                    </div>
                </div>
                <div className="information-container-content w-full border-b-mainPink border-b pb-5 mt-5">
                    <div className="information-container-content-tag text-left w-full mb-3">
                        <div className="bg-mainPink px-3 text-center w-14">
                            <p className="text-white noto-sans-jp font-medium text-sm">
                                特集
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start w-full">
                        <div className="information-container-content-date w-3/12 md:w-2/12 lg:w-1/12">
                            <p className="text-informationText zen-kaku-bold tracking-wide text-sm">
                                2024.12.30
                            </p>
                        </div>
                        <div className="information-container-content-sub-title w-9/12 md:w-10/12 lg:w-11/12 lg:pl-5">
                            <Link
                                href={'#'}
                                className="text-informationText noto-sans-jp font-medium tracking-wider text-sm md:text-md">
                                「EVERNAIL」からメゾンエイブルクラブ会員が使える特典をリリースいたしました。
                            </Link>
                        </div>
                        {/* <div className="information-container-content-icon w-1/12">
                                            <FontAwesomeIcon icon={faChevronRight} />
                                        </div> */}
                    </div>
                </div>
                <div className="information-container-content w-full border-b-mainPink border-b pb-5 mt-5">
                    <div className="information-container-content-tag text-left w-full mb-3">
                        <div className="bg-mainPink px-3 text-center w-14">
                            <p className="text-white noto-sans-jp font-medium text-sm">
                                特集
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start w-full">
                        <div className="information-container-content-date w-3/12 md:w-2/12 lg:w-1/12">
                            <p className="text-informationText zen-kaku-bold tracking-wide text-sm">
                                2024.12.30
                            </p>
                        </div>
                        <div className="information-container-content-sub-title w-9/12 md:w-10/12 lg:w-11/12 lg:pl-5">
                            <Link
                                href={'#'}
                                className="text-informationText noto-sans-jp font-medium tracking-wider text-sm md:text-md">
                                「EVERNAIL」からメゾンエイブルクラブ会員が使える特典をリリースいたしました。
                            </Link>
                        </div>
                        {/* <div className="information-container-content-icon w-1/12">
                                            <FontAwesomeIcon icon={faChevronRight} />
                                        </div> */}
                    </div>
                </div>
                <div className="information-container-more-btn mt-6">
                    <DoubleLineBtn content={'more'} link={'#'} />
                </div>
            </div>
        </div>
    )
}

export default Information

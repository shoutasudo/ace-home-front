'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

interface infoListProps {
    'info': {
        'uuid': string;
        'title': string;
        'tag': string;
        'created_at': string;
    }
}

const InfoList = ({ info }: infoListProps) => {


    return (
        <Link href={'/information/' + info.uuid}>
            <div key={info.uuid} className="information-container-content w-full border-b-mainPink border-b pb-5 mt-5">
                <div className="information-container-content-tag text-left w-full mb-3">
                    <div className="bg-mainPink px-3 py-1 text-center w-14 flex justify-center">
                        <p className="text-white noto-sans-jp font-medium text-sm">
                            {info.tag}
                        </p>
                    </div>
                </div>

                <div className="flex items-start w-full">
                    <div className="information-container-content-date w-3/12 md:w-2/12 lg:w-1/12">
                        <p className="text-informationText zen-kaku-bold tracking-wide sm:text-sm text-xs">
                            {new Date(info.created_at).toLocaleDateString(
                                "ja-JP"
                            )}
                        </p>
                    </div>
                    <div className="information-container-content-sub-title w-9/12 md:w-10/12 lg:w-11/12 lg:pl-5 pl-4">
                        <p
                            className="text-informationText noto-sans-jp font-medium tracking-wider text-sm md:text-md">
                            {info.title}
                        </p>
                    </div>
                    {/* <div className="information-container-content-icon w-1/12">
                                            <FontAwesomeIcon icon={faChevronRight} />
                                        </div> */}
                </div>
            </div>
        </Link>
    )
}

export default InfoList

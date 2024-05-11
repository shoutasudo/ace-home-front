'use client'

import Image from 'next/image'
import React from 'react'

const Company = () => {
    return (
        <div className='w-full md:px-8'>
            <div className="sns-list-card-content-sub-title text-center">
                <h2 className="text-mainPink zen-kaku-black text-md">
                    COMPANY
                </h2>
            </div>
            <div className="sns-list-card-content-main-title text-center">
                <h1 className="text-fontMainBrown zen-kaku-bold text-lg">
                    会社概要
                </h1>
            </div>
            <div className='flex justify-center w-full flex-col mt-5'>
                <div className="w-full">
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full flex justify-center items-center ">
                            <tbody className='w-full'>
                                <tr className="flex flex-col sm:flex-row items-center">
                                    <th className='bg-mainPink text-white font-bold text-center w-full sm:w-1/3 min-w-4 border-t border-l border-b border-gray-300 px-4 py-2'>商号</th>
                                    <td className='border border-gray-300 bg-white px-4 py-2 w-full sm:w-2/3 text-center text-fontMainBrown'>○○株式会社</td>
                                </tr>
                                <tr className="flex flex-col sm:flex-row items-center">
                                    <th className='bg-mainPink text-white font-bold text-center w-full sm:w-1/3 min-w-4 border-t-0 border-l border-b border-gray-300 px-4 py-2'>本社</th>
                                    <td className='border border-t-0 border-gray-300 bg-white px-4 py-2 w-full sm:w-2/3 text-center text-fontMainBrown'>兵庫県神戸市・・・・・・</td>
                                </tr>
                                <tr className="flex flex-col sm:flex-row items-center">
                                    <th className='bg-mainPink text-white font-bold text-center w-full sm:w-1/3 min-w-4 border-t-0 border-l border-b border-gray-300 px-4 py-2'>代表電話番号</th>
                                    <td className='border border-t-0 border-gray-300 bg-white px-4 py-2 w-full sm:w-2/3 text-center text-fontMainBrown'>078-111-1111</td>
                                </tr>
                                <tr className="flex flex-col sm:flex-row items-center">
                                    <th className='bg-mainPink text-white font-bold text-center w-full sm:w-1/3 min-w-4 border-t-0 border-l border-b border-gray-300 px-4 py-2'>創業</th>
                                    <td className='border border-t-0 border-gray-300 bg-white px-4 py-2 w-full sm:w-2/3 text-center text-fontMainBrown'>2024年6月</td>
                                </tr>
                                <tr className="flex flex-col sm:flex-row items-center">
                                    <th className='bg-mainPink text-white font-bold text-center w-full sm:w-1/3 min-w-4 border-t-0 border-l border-b border-gray-300 px-4 py-2'>免許番号</th>
                                    <td className='border border-t-0 border-gray-300 bg-white px-4 py-2 w-full sm:w-2/3 text-center text-fontMainBrown'>国土交通大臣免許番号(0)第0000号</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='company-map w-full flex justify-center mt-5'>
                    <Image src="/images/758x500.png" width={758} height={500} alt='map' />
                </div>
            </div>
        </div>
    )
}

export default Company
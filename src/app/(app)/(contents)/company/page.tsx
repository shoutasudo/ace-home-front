'use client'

import Contents from '@/ _components/Contents'
import Image from 'next/image'
import React from 'react'

const Company = () => {
    return (
        <Contents subTitle={'COMPANY'} mainTitle={'会社概要'}>
            <div className='flex justify-center w-full flex-col mt-5'>
                <div className="w-full">
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full flex justify-center items-center ">
                            <tbody className='w-full'>
                                <tr className="flex flex-col sm:flex-row items-center w-full">
                                    <th className='bg-mainPink text-white font-bold text-center w-full sm:w-1/3 min-w-4 border-t border-l border-b border-gray-300 px-4 py-2 text-sm'>商号</th>
                                    <td className='border border-gray-300 bg-white px-4 py-2 w-full sm:w-2/3 text-center text-sm text-fontMainBrown'>株式会社ACE HOME</td>
                                </tr>
                                <tr className="flex flex-col sm:flex-row items-center">
                                    <th className='bg-mainPink text-white font-bold text-center w-full sm:w-1/3 min-w-4 border-t-0 border-l border-b border-gray-300 px-4 py-2 text-sm'>本社</th>
                                    <td className='border border-t-0 border-gray-300 bg-white px-4 py-2 w-full sm:w-2/3 text-center text-sm text-fontMainBrown'>兵庫県神戸市長田区長田町５丁目３番２号
                                    </td>
                                </tr>
                                <tr className="flex flex-col sm:flex-row items-center">
                                    <th className='bg-mainPink text-white font-bold text-center w-full sm:w-1/3 min-w-4 border-t-0 border-l border-b border-gray-300 px-4 py-2 text-sm'>代表電話番号</th>
                                    <td className='border border-t-0 border-gray-300 bg-white px-4 py-2 w-full sm:w-2/3 text-center text-fontMainBrown text-sm'>078-611-6007</td>
                                </tr>
                                <tr className="flex flex-col sm:flex-row items-center">
                                    <th className='bg-mainPink text-white font-bold text-center w-full sm:w-1/3 min-w-4 border-t-0 border-l border-b border-gray-300 px-4 py-2 text-sm'>創業</th>
                                    <td className='border border-t-0 border-gray-300 bg-white px-4 py-2 w-full sm:w-2/3 text-center text-fontMainBrown text-sm'>2024年5月</td>
                                </tr>
                                <tr className="flex flex-col sm:flex-row items-center">
                                    <th className='bg-mainPink text-white font-bold text-center w-full sm:w-1/3 min-w-4 border-t-0 border-l border-b border-gray-300 px-4 py-2 text-sm'>免許番号</th>
                                    <td className='border border-t-0 border-gray-300 bg-white px-4 py-2 w-full sm:w-2/3 text-center text-fontMainBrown text-sm'>国土交通大臣免許番号(0)第0000号</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className='company-map w-full flex justify-center mt-5'>
                <iframe className='w-full h-80' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.2537991596773!2d135.14557790931045!3d34.673543442878746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60008589021e867f%3A0x8f0d6621640900d0!2z44CSNjUzLTA4MTIg5YW15bqr55yM56We5oi45biC6ZW355Sw5Yy66ZW355Sw55S677yV5LiB55uu77yT4oiS77yS!5e0!3m2!1sja!2sjp!4v1716024902308!5m2!1sja!2sjp" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </Contents>
    )
}

export default Company
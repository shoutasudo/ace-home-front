'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import DoubleLineBtn from './DoubleLineBtn';
import { getUserData, getPostId, getPostInfo } from '@/lib/api/instagramApi';

interface idProps {
    id: string
}

interface PostInfoType {
    caption: string,
    id: string,
    media_type: string,
    media_url: string,
    permalink: string,
    timestamp: string,
    username: string
}

const InstagramContents = () => {
    const [infos, setInfos] = useState<PostInfoType[]>([]);
    const [visibleItems, setVisibleItems] = useState(6);

    useEffect(() => {
        const fetchData = async () => {
            const postIdArr = await getPostId();
            const data = await Promise.all(postIdArr.map((id: idProps) => getPostInfo(id.id)));
            setInfos(data);
        }
        fetchData();
    }, []);

    return (
        <div className='flex justify-center items-center'>
            <div className="instagram-contents-container flex justify-center flex-col w-full max-w-4xl">
                <div className="instagram-contents-container-card w-full flex justify-center items-center flex-col border border-mainPink border-t-8 py-10 sm:px-10 px-2">
                    <div className="service-2-container-card-title-image w-full flex justify-center items-center flex-col">
                        <Image
                            src="/images/495x123.png"
                            width={495}
                            height={123}
                            alt="service-2-image"
                        />
                    </div>
                    <div className="member-register-container w-full my-10 max-w-4xl flex justify-center">
                        <div className='w-full grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-4 place-items-center'>
                            {infos?.slice(0, visibleItems).map((info) =>
                            (
                                <div key={info.id} className='flex justify-center items-center w-11/12'>
                                    <Link href={info.permalink}>
                                        <Image
                                            src={info.media_url}
                                            width={300}
                                            height={300}
                                            alt='instagram-img'
                                            object-fit="cover"
                                            className='instagram-img rounded-md'
                                        />
                                    </Link>
                                </div>
                            )
                            )}
                        </div>
                    </div>
                    {infos.length > visibleItems && (
                        <div className="instagram-more-btn">
                            {/* 現状クライアントで組んでるが想定ではonclickで６個ずづ表示していく想定。 */}
                            {/* もし、遷移先をインスタグラムにする場合は、サーバーサイドで組みなす */}
                            <DoubleLineBtn content={'more'} link={'#'} />
                        </div>
                    )}
                </div>
            </div>
        </div>

    )
}

export default InstagramContents
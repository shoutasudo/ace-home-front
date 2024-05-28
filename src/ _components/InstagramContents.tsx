import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import DoubleLineBtn from './DoubleLineBtn';
// import { getUserData, getPostId, getPostInfo } from '@/lib/api/instagramApi';

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

const getPostId = async () => {
    const res = await fetch(`https://graph.facebook.com/v19.0/${process.env.NEXT_PUBLIC_INSTAGRAM_ID}/media?fields=id&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN}`);
    const postIdsObj = await res.json();
    const postIdArr = postIdsObj.data;
    return postIdArr;
}

const getPostInfo = async (id: string) => {
    const res = await fetch(`https://graph.facebook.com/v19.0/${id}?fields=id,media_type,permalink,media_url,caption,username,timestamp&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN}`);
    const info = await res.json();
    return info;
}

const InstagramContents = async () => {
    const postIdArr = await getPostId();
    const infos = await Promise.all(postIdArr.map((id: idProps) => getPostInfo(id.id)));

    return (
        <div className='flex justify-center items-center'>
            <div className="instagram-contents-container card-content flex justify-center flex-col w-full max-w-4xl">
                <div className="instagram-contents-container-card w-full flex justify-center items-center flex-col border border-mainPink border-t-8 py-10 sm:px-10 px-2">
                    <div className="service-2-container-card-title-image w-full flex justify-center items-center flex-col">
                        <Image
                            src="/icons/instagram-banner.png"
                            width={495}
                            height={123}
                            alt="service-2-image"
                        />
                    </div>
                    <div className="member-register-container w-full my-10 max-w-4xl flex justify-center">
                        <div className='w-full grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-4 place-items-center'>
                            {infos?.slice(0, 6).map((info) =>
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
                    {infos.length > 6 && (
                        <div className="instagram-more-btn">
                            {/* 現状クライアントで組んでるが想定ではonclickで６個ずづ表示していく想定。 */}
                            {/* もし、遷移先をインスタグラムにする場合は、サーバーサイドで組みなす */}
                            <DoubleLineBtn content={'more'} link={`${process.env.INSTAGRAM_URL}`} />
                        </div>
                    )}
                </div>
            </div>
        </div>

    )
}

export default InstagramContents
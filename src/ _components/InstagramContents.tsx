'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import DoubleLineBtn from './DoubleLineBtn';

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
    const [ids, setIds] = useState([]);
    const [infos, setInfos] = useState<PostInfoType[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/instagram/getPostId');
                const ids = await response.json();
                const infoDataPromise = await Promise.all(ids.map((id: idProps) => fetch(`/api/instagram/getPostInfo?id=${id.id}`)));
                const infoData = await Promise.all(infoDataPromise.map((i) => i.json()));
                setInfos(infoData);
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, []);

    return (
        <div className="flex justify-center flex-col">
            <div className="flex justify-center items-center flex-col px-0">
                <div className="service-2-container-card w-full max-w-4xl flex justify-center items-center flex-col border border-mainPink border-t-8 py-10 sm:px-10 px-2">
                    <div className="service-2-container-card-title-image w-full flex justify-center items-center flex-col">
                        <Image
                            src="/icons/instagram-banner.png"
                            width={495}
                            height={123}
                            alt="service-2-image"
                        />
                    </div>
                    <div className="member-register-container w-full my-10 flex justify-center">
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
                                            unoptimized
                                        />
                                    </Link>
                                </div>
                            )
                            )}
                        </div>
                    </div>
                    {infos.length > 6 && (
                        <div className="instagram-more-btn">
                            <DoubleLineBtn content={'more'} link={`${process.env.INSTAGRAM_URL}`} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default InstagramContents
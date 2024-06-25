'use client'
import React, { useEffect, useState } from 'react';
import DoubleLineBtn from '../DoubleLineBtn';
import InfoList from './InfoList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface InfoObject {
    uuid: string;
    title: string;
    tag: string;
    created_at: string;
}

const Information = () => {
    const [info, setInfo] = useState<InfoObject[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [totalInfo, setTotalInfo] = useState<InfoObject[]>([]); // 全情報を保持するステート

    useEffect(() => {
        const getAll = async () => {
            setLoading(true);
            try {
                const res = await fetch(process.env.NEXT_PUBLIC_FRONTEND_URL + `/api/information/getAll`);
                if (!res.ok) {
                    throw new Error('Failed to fetch data');
                }
                const responseBody = await res.json();
                setTotalInfo(responseBody);
                setInfo(responseBody.slice(0, 4)); // 最初の4件をセット
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };
        getAll();
    }, []);

    const handleLoadMore = () => {
        const nextPageNumber = pageNumber + 1;
        setInfo(totalInfo.slice(0, nextPageNumber * 4)); // 次のページの情報をセット
        setPageNumber(nextPageNumber);
    };

    return (
        <div className="information-container w-full flex justify-center items-center flex-col bg-informationBg py-6 ms:px-5 px-2">
            <div className="w-full max-w-4xl">
                <div className="information-container-title flex justify-center items-center mb-5">
                    <h2 className="noto-sans-jp font-medium text-xl tracking-normal">
                        information
                    </h2>
                </div>
                {info.length !== 0 &&
                    info.map(v => (
                        <InfoList key={v.uuid} info={v} />
                    ))}
                {totalInfo.length > info.length && (
                    <div className="information-container-more-btn mt-6">
                        <div className="center btn_more z-10">
                            <button onClick={handleLoadMore} className="bdr_btn">
                                <span>
                                    more <FontAwesomeIcon icon={faChevronRight} />
                                </span>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Information;

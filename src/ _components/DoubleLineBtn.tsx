import React, { MouseEventHandler } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import '@/css/doubleLineBtn.css'

type DoubleLineBtnProps = {
    content: string;
    link: string;
};

const DoubleLineBtn = ({ content, link}: DoubleLineBtnProps) => {

    return (
        <div className="center btn_more z-10">
            <Link href={link} className="bdr_btn">
                <span>
                    {content} <FontAwesomeIcon icon={faChevronRight} />
                </span>
            </Link>
        </div>
    )
}

export default DoubleLineBtn

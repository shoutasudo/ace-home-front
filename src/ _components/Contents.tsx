import React from 'react'

interface ContentsProps {
    subTitle: string,
    mainTitle: string,
    children: React.ReactNode,
}

const Contents = ({ subTitle, mainTitle, children }: ContentsProps) => {
    return (
        <div className='md:px-8 px-2'>
            <div className="staff-list-sub-title text-center">
                <h2 className="text-mainPink zen-kaku-black text-md">
                    {subTitle}
                </h2>
            </div>
            <div className="staff-list-main-title text-center">
                <h1 className="text-fontMainBrown zen-kaku-bold text-lg">
                    {mainTitle}
                </h1>
            </div>
            {children}
        </div>
    )
}

export default Contents
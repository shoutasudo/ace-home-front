import Image from 'next/image'
import React from 'react'

interface StaffCardProps {
    src: string,
    jobTitle: string,
    name: string,
    comment: string
}

const StaffCard = ({ src, jobTitle, name, comment }: StaffCardProps) => {
    return (
        <div className="flex justify-center flex-col md:w-11/12 w-full">
            <div className="card-top-banner bg-mainPink py-1 text-center">
                <h1 className="card-top-banner-title text-white md:text-xs text-sm noto-sans-jp font-bold">
                    { comment }
                </h1>
            </div>
            <div className="card-image">
                <Image
                    src={src}
                    alt="cart"
                    className='object-contain h-[100%] w-full'
                    height={350}
                    width={518}
                />
            </div>
            <div className="card-footer bg-mainPink  p-4 text-white text-center noto-sans-jp py-1">
                <p className="font-semibold md:text-md text-xs">
                    {jobTitle}
                </p>
                <p className="font-semibold md:text-sm text-lg">
                    {name}
                </p>
            </div>
        </div>
    )
}

export default StaffCard

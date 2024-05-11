import Image from 'next/image'
import React from 'react'

interface StaffCardProps {
    src: string,
    jobTitle: string,
    name: string,
}

const StaffCard = ({ src, jobTitle, name }: StaffCardProps) => {
    return (
        <div className="flex justify-center flex-col md:w-11/12 w-full">
            <div className="card-top-banner bg-mainPink py-1 text-center">
                <h1 className="card-top-banner-title text-white md:text-xs text-sm noto-sans-jp font-bold">
                    あなたに合ったお部屋を探します！
                </h1>
            </div>
            <div className="card-image">
                <Image
                    src={src}
                    width={518}
                    height={350}
                    alt="cart"
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
import React from 'react'
import Image from 'next/image'

const TopImage = () => {

    return (
        <>
            <div className="top-image-container-pc w-full sm:block hidden sm:mt-10"></div>
            <div className="top-image-container-sp sm:hidden block">
                <Image
                    src="/images/top-banner-sp-1.png"
                    alt="banner"
                    width={750}
                    height={650}
                />
            </div>
        </>
    )
}


export default TopImage

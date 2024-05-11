import React from 'react'

interface PrivacyContentProps {
    title: string,
    children: string,
}

const PrivacyContent = ({ title, children }: PrivacyContentProps) => {
    return (
        <>
            <div className='privacy-policy-content-header-title noto-sans-jp'>
                <h2 className='text-xl text-fontMainBrown font-medium'>{ title }</h2>
            </div>
            <div className='privacy-policy-content-header-description mt-3'>
                <p className='text-fontMainBrown text-xs tracking-wide leading-5'>{children }</p>
            </div>
        </>
    )
}

export default PrivacyContent
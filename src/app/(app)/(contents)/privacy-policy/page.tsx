import PrivacyPolicyContents from '@/ _components/PrivacyPolicyContents'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'プライバシポリシー'
}

const PrivacyPolicyPage = () => {
    return (
        <>
            <PrivacyPolicyContents />
        </>
    )
}

export default PrivacyPolicyPage
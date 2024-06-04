import React from 'react'
import '@/css/contact.css'
import Contents from '@/ _components/Contents'
import ContactForm from '@/ _components/ContactForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'お問合せ'
}

const ContactPage = () => {

    return (
        <Contents subTitle={'CONTACT'} mainTitle={'お問合せ'}>
            <div className="sns-list-card-content-description mt-4">
                <h3 className="text-gray-700 zen-kaku-regular text-xs text-center tracking-wide">
                    下記の項目に必要な情報を入力してください。
                </h3>
                <h3 className="text-gray-700 zen-kaku-regular text-xs text-center tracking-wide">
                    「<span className="text-mainPink">※</span>
                    」マークがある箇所は必ずご入力ください。
                </h3>
            </div>
            <div className="contact-banner w-full">
                <div className="bg-mainGray w-full my-4">
                    <h3 className="zen-kaku-medium text-sm p-2">
                        お問合せ内容
                        <span className="text-mainPink ml-1">※</span>
                    </h3>
                </div>
            </div>
            <ContactForm />
        </Contents>

    )
}

export default ContactPage
